import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaTwitter } from "react-icons/fa";

export interface TestimonialProps extends CardProps {
  children?: React.ReactNode;
  href?: string;
}

export const Testimonial = ({
  children,
  href,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest}>
      <CardBody>
        {children}
        {href && (
          <Link href={href} position="absolute" top="4" right="4">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
    </Card>
  );
};
