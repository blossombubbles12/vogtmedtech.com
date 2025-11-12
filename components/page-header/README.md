# PageHeader Component

A professional, reusable page header component for Vogt MedTech with gradient backgrounds, optional images, and smooth animations.

## Features

- ✅ Gradient background overlay (customizable colors)
- ✅ Optional background image support
- ✅ Responsive typography and spacing
- ✅ Framer Motion fade-in animations
- ✅ Dark mode support
- ✅ Decorative wave separator
- ✅ Professional medical tech aesthetic
- ✅ TypeScript support with full prop types

## Installation

The component is already created at:

- `components/page-header/page-header.tsx`
- `components/page-header/index.ts`

## Usage

### Basic Usage

```tsx
import { PageHeader } from "#components/page-header";

export default function MyPage() {
	return (
		<>
			<PageHeader
				title="Medical Devices"
				subtitle="Advanced medical devices for better patient outcomes"
			/>
			{/* Rest of your page content */}
		</>
	);
}
```

### With Custom Gradient

```tsx
<PageHeader
	title="About Us"
	subtitle="Pioneering innovation in healthcare"
	gradientColors={["blue.700", "purple.500"]}
/>
```

### With Background Image

```tsx
<PageHeader
	title="Our Solutions"
	subtitle="Cutting-edge medical technology"
	image="/images/hero-medical-devices.jpg"
	gradient={true} // Adds overlay for better text readability
/>
```

### Left-Aligned Header

```tsx
<PageHeader
	title="Contact Us"
	subtitle="Get in touch with our team"
	align="left"
/>
```

### Custom Height

```tsx
<PageHeader
	title="FAQ"
	subtitle="Frequently asked questions"
	height={["250px", "300px", "350px"]} // [mobile, tablet, desktop]
/>
```

## Props

| Prop             | Type                            | Default                       | Description                        |
| ---------------- | ------------------------------- | ----------------------------- | ---------------------------------- |
| `title`          | `string`                        | **Required**                  | Main page heading                  |
| `subtitle`       | `string`                        | `undefined`                   | Optional subtitle/description      |
| `image`          | `string`                        | `undefined`                   | Background image path from /public |
| `gradient`       | `boolean`                       | `true`                        | Enable gradient overlay            |
| `gradientColors` | `[string, string]`              | `['brand.600', 'accent.400']` | Gradient color stops               |
| `height`         | `string \| string[]`            | `['300px', '350px', '400px']` | Header height (responsive)         |
| `align`          | `'left' \| 'center' \| 'right'` | `'center'`                    | Text alignment                     |

## Examples in the Codebase

### Our Story Page

```tsx
// app/(marketing)/about/story/page.tsx
<PageHeader
	title="Our Story"
	subtitle="Pioneering innovation in healthcare technology since our founding..."
	gradient={true}
/>
```

### Medical Devices Page

```tsx
// app/(marketing)/solutions/medical-devices/page.tsx
<PageHeader
	title="Medical Devices"
	subtitle="Advanced medical devices engineered for precision, safety, and better patient outcomes..."
	gradient={true}
/>
```

### Contact Page

```tsx
// app/(marketing)/contact/page.tsx
<PageHeader
	title="Contact Us"
	subtitle="Get in touch with our team for inquiries, partnerships, or support..."
	gradient={true}
/>
```

## Design Tokens

The component uses Vogt MedTech's brand colors:

- **Primary Blue**: `brand.500` (#007BFF)
- **Accent Teal**: `accent.400` (#00C2A8)

Gradient defaults to `brand.600` → `accent.400` for a professional medical tech look.

## Animation Details

- Container fades in over 0.6 seconds
- Title and subtitle stagger by 0.2 seconds
- Items slide up 20px while fading in
- Smooth easing for professional feel

## Accessibility

- Proper semantic HTML (`<h1>` for title)
- High contrast white text on gradient background
- Text shadows for improved readability
- Responsive font sizes for all screen sizes

## Tips

1. **With Images**: Always use `gradient={true}` to ensure text is readable
2. **Keep it Short**: Aim for 5-10 words for title, 1-2 sentences for subtitle
3. **Consistent Heights**: Use similar heights across pages for visual consistency
4. **Image Optimization**: Use Next.js Image optimization for background images when possible

## Customization

To create a variant for specific page types:

```tsx
// For pricing pages
<PageHeader
  title="Pricing"
  subtitle="Choose the plan that fits your needs"
  gradientColors={['green.600', 'teal.500']}
  height="350px"
/>

// For blog/resources
<PageHeader
  title="Resources"
  subtitle="Insights and knowledge from our experts"
  image="/images/resources-bg.jpg"
  align="left"
  height={['250px', '300px', '350px']}
/>
```

## Future Enhancements

Potential additions (not yet implemented):

- Breadcrumb integration
- CTA button support
- Particle effects background
- Video background support
- Custom SVG wave shapes
