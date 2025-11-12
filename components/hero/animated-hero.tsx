'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import { Button, Box, Heading, Text, VStack, HStack, Stack, Badge } from '@chakra-ui/react'
import { FiArrowRight, FiActivity } from 'react-icons/fi'

// Easing functions
const easingUtils = {
  linear: (t: number) => t,
  easeInExpo: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
}

interface Disc {
  x: number
  y: number
  w: number
  h: number
  p: number
}

interface Particle {
  x: number
  sx: number
  dx: number
  y: number
  vy: number
  p: number
  r: number
  c: string
}

const AnimatedHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Animation state
  const stateRef = useRef<{
    ctx: CanvasRenderingContext2D | null
    rect: { x: number; y: number; width: number; height: number; top: number; right: number; bottom: number; left: number }
    render: { width: number; height: number; dpi: number }
    discs: Disc[]
    lines: number[][][]
    particles: Particle[]
    startDisc: { x: number; y: number; w: number; h: number }
    endDisc: { x: number; y: number; w: number; h: number }
    clip: { disc: Disc; i: number; path: Path2D | null }
    linesCanvas: OffscreenCanvas | null
    linesCtx: OffscreenCanvasRenderingContext2D | null
    particleArea: { sw: number; ew: number; h: number; sx: number; ex: number }
  }>({
    ctx: null,
    rect: { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 },
    render: { width: 0, height: 0, dpi: 1 },
    discs: [],
    lines: [],
    particles: [],
    startDisc: { x: 0, y: 0, w: 0, h: 0 },
    endDisc: { x: 0, y: 0, w: 0, h: 0 },
    clip: { disc: { x: 0, y: 0, w: 0, h: 0, p: 0 }, i: 0, path: null },
    linesCanvas: null,
    linesCtx: null,
    particleArea: { sw: 0, ew: 0, h: 0, sx: 0, ex: 0 },
  })

  const tweenValue = useCallback(
    (start: number, end: number, p: number, ease: string = 'linear') => {
      const delta = end - start
      const easeFn = ease === 'inExpo' ? easingUtils.easeInExpo : easingUtils.linear
      return start + delta * easeFn(p)
    },
    []
  )

  const tweenDisc = useCallback(
    (disc: Disc) => {
      const state = stateRef.current
      disc.x = tweenValue(state.startDisc.x, state.endDisc.x, disc.p)
      disc.y = tweenValue(state.startDisc.y, state.endDisc.y, disc.p, 'inExpo')
      disc.w = tweenValue(state.startDisc.w, state.endDisc.w, disc.p)
      disc.h = tweenValue(state.startDisc.h, state.endDisc.h, disc.p)
      return disc
    },
    [tweenValue]
  )

  const setSize = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const state = stateRef.current
    state.rect = container.getBoundingClientRect()

    state.render = {
      width: state.rect.width,
      height: state.rect.height,
      dpi: window.devicePixelRatio,
    }

    canvas.width = state.render.width * state.render.dpi
    canvas.height = state.render.height * state.render.dpi
  }, [])

  const setDiscs = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    state.discs = []

    state.startDisc = {
      x: width * 0.5,
      y: height * 0.45,
      w: width * 0.75,
      h: height * 0.7,
    }

    state.endDisc = {
      x: width * 0.5,
      y: height * 0.95,
      w: 0,
      h: 0,
    }

    const totalDiscs = 100
    let prevBottom = height

    for (let i = 0; i < totalDiscs; i++) {
      const p = i / totalDiscs
      const disc = { x: 0, y: 0, w: 0, h: 0, p }
      tweenDisc(disc)

      const bottom = disc.y + disc.h

      if (bottom <= prevBottom) {
        state.clip = {
          disc: { ...disc },
          i,
          path: typeof Path2D !== 'undefined' ? new Path2D() : null,
        }
      }

      prevBottom = bottom
      state.discs.push(disc)
    }

    if (typeof Path2D !== 'undefined') {
      state.clip.path = new Path2D()
      state.clip.path.ellipse(
        state.clip.disc.x,
        state.clip.disc.y,
        state.clip.disc.w,
        state.clip.disc.h,
        0,
        0,
        Math.PI * 2
      )
      state.clip.path.rect(
        state.clip.disc.x - state.clip.disc.w,
        0,
        state.clip.disc.w * 2,
        state.clip.disc.y
      )
    }
  }, [tweenDisc])

  const setLines = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    if (width <= 0 || height <= 0 || typeof OffscreenCanvas === 'undefined') return

    state.lines = []

    const totalLines = 100
    const linesAngle = (Math.PI * 2) / totalLines

    for (let i = 0; i < totalLines; i++) {
      state.lines.push([])
    }

    state.discs.forEach((disc) => {
      for (let i = 0; i < totalLines; i++) {
        const angle = i * linesAngle

        const p = [
          disc.x + Math.cos(angle) * disc.w,
          disc.y + Math.sin(angle) * disc.h,
        ]

        state.lines[i].push(p)
      }
    })

    state.linesCanvas = new OffscreenCanvas(Math.max(1, width), Math.max(1, height))
    const ctx = state.linesCanvas.getContext('2d')
    if (!ctx || !state.clip.path) return
    state.linesCtx = ctx

    state.lines.forEach((line) => {
      ctx.save()

      let lineIsIn = false
      line.forEach((p1, j) => {
        if (j === 0) return

        const p0 = line[j - 1]

        if (
          !lineIsIn &&
          state.clip.path &&
          (ctx.isPointInPath(state.clip.path, p1[0], p1[1]) ||
            ctx.isPointInStroke(state.clip.path, p1[0], p1[1]))
        ) {
          lineIsIn = true
        } else if (lineIsIn && state.clip.path) {
          ctx.clip(state.clip.path)
        }

        ctx.beginPath()
        ctx.moveTo(p0[0], p0[1])
        ctx.lineTo(p1[0], p1[1])
        ctx.strokeStyle = '#00C2A8'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.closePath()
      })

      ctx.restore()
    })
  }, [])

  const initParticle = useCallback((start = false): Particle => {
    const state = stateRef.current
    const sx = state.particleArea.sx + state.particleArea.sw * Math.random()
    const ex = state.particleArea.ex + state.particleArea.ew * Math.random()
    const dx = ex - sx
    const y = start ? state.particleArea.h * Math.random() : state.particleArea.h
    const r = 0.5 + Math.random() * 3
    const vy = 0.5 + Math.random()

    return {
      x: sx,
      sx,
      dx,
      y,
      vy,
      p: 0,
      r,
      c: `rgba(0, 194, 168, ${0.3 + Math.random() * 0.7})`,
    }
  }, [])

  const setParticles = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    state.particles = []

    state.particleArea = {
      sw: state.clip.disc.w * 0.5,
      ew: state.clip.disc.w * 2,
      h: height * 0.85,
      sx: 0,
      ex: 0,
    }
    state.particleArea.sx = (width - state.particleArea.sw) / 2
    state.particleArea.ex = (width - state.particleArea.ew) / 2

    const totalParticles = 80

    for (let i = 0; i < totalParticles; i++) {
      const particle = initParticle(true)
      state.particles.push(particle)
    }
  }, [initParticle])

  const drawDiscs = useCallback(() => {
    const state = stateRef.current
    const { ctx } = state
    if (!ctx) return

    ctx.strokeStyle = '#007BFF'
    ctx.lineWidth = 1.5

    // Outer disc
    const outerDisc = state.startDisc
    ctx.beginPath()
    ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()

    // Inner discs
    state.discs.forEach((disc, i) => {
      if (i % 5 !== 0) return

      const shouldClip = disc.w < state.clip.disc.w - 5 && state.clip.path
      
      if (shouldClip && state.clip.path) {
        ctx.save()
        ctx.clip(state.clip.path)
      }

      ctx.beginPath()
      ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.closePath()

      if (shouldClip) {
        ctx.restore()
      }
    })
  }, [])

  const drawLines = useCallback(() => {
    const state = stateRef.current
    const { ctx, linesCanvas } = state
    if (!ctx || !linesCanvas || linesCanvas.width === 0 || linesCanvas.height === 0) return

    ctx.drawImage(linesCanvas, 0, 0)
  }, [])

  const drawParticles = useCallback(() => {
    const state = stateRef.current
    const { ctx } = state
    if (!ctx || !state.clip.path) return

    ctx.save()
    ctx.clip(state.clip.path)

    state.particles.forEach((particle) => {
      ctx.fillStyle = particle.c
      ctx.beginPath()
      ctx.rect(particle.x, particle.y, particle.r, particle.r)
      ctx.closePath()
      ctx.fill()
    })

    ctx.restore()
  }, [])

  const moveDiscs = useCallback(() => {
    const state = stateRef.current
    state.discs.forEach((disc) => {
      disc.p = (disc.p + 0.001) % 1
      tweenDisc(disc)
    })
  }, [tweenDisc])

  const moveParticles = useCallback(() => {
    const state = stateRef.current
    state.particles.forEach((particle) => {
      particle.p = 1 - particle.y / state.particleArea.h
      particle.x = particle.sx + particle.dx * particle.p
      particle.y -= particle.vy

      if (particle.y < 0) {
        const newParticle = initParticle()
        particle.y = newParticle.y
      }
    })
  }, [initParticle])

  const tick = useCallback(() => {
    const canvas = canvasRef.current
    const state = stateRef.current
    if (!canvas || !state.ctx) return

    const { ctx } = state

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    ctx.scale(state.render.dpi, state.render.dpi)

    moveDiscs()
    moveParticles()

    drawDiscs()
    drawLines()
    drawParticles()

    ctx.restore()

    animationRef.current = requestAnimationFrame(tick)
  }, [moveDiscs, moveParticles, drawDiscs, drawLines, drawParticles])

  const handleResize = useCallback(() => {
    setSize()
    setDiscs()
    setLines()
    setParticles()
  }, [setSize, setDiscs, setLines, setParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    stateRef.current.ctx = canvas.getContext('2d')

    setSize()
    setDiscs()
    setLines()
    setParticles()

    window.addEventListener('resize', handleResize)

    tick()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [setSize, setDiscs, setLines, setParticles, handleResize, tick])

  return (
    <Box
      ref={containerRef}
      position="relative"
      w="full"
      h={{ base: '80vh', md: '90vh', lg: '100vh' }}
      minH={{ base: '600px', md: '700px', lg: '800px' }}
      overflow="hidden"
      bg="gray.900"
      _dark={{ bg: 'gray.900' }}
      mt="80px"
    >
      {/* Canvas Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        _before={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 2,
          w: '150%',
          h: '140%',
          bgGradient: 'radial(ellipse at 50% 55%, transparent 10%, black 50%)',
          transform: 'translate(-50%, -50%)',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 5,
          w: 'full',
          h: 'full',
          bgGradient: 'radial(ellipse at 50% 75%, #007BFF 20%, transparent 75%)',
          mixBlendMode: 'overlay',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

        {/* Aura Effect */}
        <Box
          position="absolute"
          top="-71.5%"
          left="50%"
          zIndex={3}
          w="30%"
          h="140%"
          bgGradient="linear(20deg, #00f8f1, rgba(255, 189, 30, 0.13) 16.5%, #fe848f 33%, rgba(254, 132, 143, 0.13) 49.5%, #00f8f1 66%, rgba(0, 248, 241, 0.38) 85.5%, #ffbd1e 100%)"
          backgroundSize="100% 200%"
          backgroundPosition="0 100%"
          borderRadius="0 0 100% 100%"
          filter="blur(50px)"
          mixBlendMode="plus-lighter"
          opacity={0.75}
          transform="translate(-50%, 0)"
          sx={{
            '@keyframes aura-glow': {
              '0%': { backgroundPosition: '0 100%' },
              '100%': { backgroundPosition: '0 300%' },
            },
            animation: 'aura-glow 5s infinite linear',
          }}
        />

        {/* Overlay Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex={10}
          w="full"
          h="full"
          bg="repeating-linear-gradient(transparent, transparent 1px, white 1px, white 2px)"
          mixBlendMode="overlay"
          opacity={0.3}
        />
      </Box>

      {/* Hero Content */}
      <Box
        position="absolute"
        inset="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={20}
        pointerEvents="none"
        px={{ base: 4, md: 8 }}
      >
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center" maxW={{ base: 'full', md: '5xl' }}>
          {/* Announcement Badge */}
          <Badge
            bg="whiteAlpha.100"
            backdropFilter="blur(15px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            color="white"
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="600"
            px={{ base: 3, md: 5 }}
            py={{ base: 2, md: 3 }}
            borderRadius="full"
            display="flex"
            alignItems="center"
            gap={{ base: 2, md: 3 }}
            pointerEvents="auto"
            _hover={{
              bg: 'whiteAlpha.200',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.3s"
            sx={{
              '@keyframes glow-pulse': {
                '0%': {
                  boxShadow: '0 0 10px #00f8f1, 0 0 20px #00f8f1',
                  opacity: 0.8,
                },
                '100%': {
                  boxShadow: '0 0 15px #00f8f1, 0 0 30px #00f8f1',
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              as="span"
              w={{ base: '6px', md: '8px' }}
              h={{ base: '6px', md: '8px' }}
              bg="#00f8f1"
              borderRadius="full"
              boxShadow="0 0 10px #00f8f1, 0 0 20px #00f8f1"
              sx={{
                animation: 'glow-pulse 2s ease-in-out infinite alternate',
              }}
            />
            <HStack as="span" spacing={{ base: 1, md: 2 }}>
              <FiActivity size={14} />
              <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                Transforming Healthcare with Innovation
              </Text>
            </HStack>
          </Badge>

          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            color="white"
            letterSpacing="tight"
            lineHeight="1.1"
            px={{ base: 2, md: 0 }}
          >
            Advanced Medical
            <br />
            Technology Solutions
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
            color="whiteAlpha.900"
            maxW={{ base: 'full', md: '3xl' }}
            lineHeight="tall"
            px={{ base: 2, md: 0 }}
          >
            Pioneering next-generation medical devices, AI-powered diagnostics, and digital health
            solutions that empower healthcare professionals worldwide.
          </Text>

          {/* CTA Buttons */}
          <Stack 
            direction={{ base: 'column', sm: 'row' }} 
            spacing={4} 
            pointerEvents="auto" 
            pt={4}
            w={{ base: 'full', sm: 'auto' }}
          >
            <Button
              size={{ base: 'lg', md: 'lg' }}
              colorScheme="brand"
              rightIcon={<FiArrowRight />}
              fontSize={{ base: 'md', md: 'lg' }}
              px={{ base: 6, md: 8 }}
              py={{ base: 6, md: 7 }}
              borderRadius="full"
              boxShadow="0 0 30px rgba(0, 123, 255, 0.5)"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 0 40px rgba(0, 123, 255, 0.7)',
              }}
              transition="all 0.3s"
              w={{ base: 'full', sm: 'auto' }}
            >
              Explore Solutions
            </Button>
            <Button
              size={{ base: 'lg', md: 'lg' }}
              variant="outline"
              colorScheme="whiteAlpha"
              color="white"
              borderColor="whiteAlpha.300"
              fontSize={{ base: 'md', md: 'lg' }}
              px={{ base: 6, md: 8 }}
              py={{ base: 6, md: 7 }}
              borderRadius="full"
              _hover={{
                bg: 'whiteAlpha.200',
                borderColor: 'white',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
              w={{ base: 'full', sm: 'auto' }}
            >
              Schedule Demo
            </Button>
          </Stack>
        </VStack>
      </Box>
    </Box>
  )
}

export default AnimatedHero
