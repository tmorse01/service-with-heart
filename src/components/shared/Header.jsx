import React, { useState, useEffect, useRef } from "react";
import {
  Heading,
  Box,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/testimonials", label: "Testimonials", end: false },
  { to: "/iet", label: "IET", end: false },
  { to: "/mexico", label: "Mexico", end: false },
  { to: "/contact", label: "Contact", end: false },
];

const PHONE = "332-849-4644";

const linkStyles = {
  color: "fg.default",
  fontWeight: "bold",
  fontSize: "xl",
  textDecoration: "none",
  _hover: { color: "accent.solid" },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "accent.muted",
    outlineOffset: "2px",
  },
};

const activeLinkStyles = {
  ...linkStyles,
  color: "accent.solid",
  borderBottom: "2px solid",
  borderColor: "accent.muted",
  pb: 1,
};

const NavLinks = ({ isMobile = false, onLinkClick, firstLinkRef }) => (
  <>
    {NAV_ITEMS.map(({ to, label, end }, index) => (
      <Link
        key={to}
        ref={isMobile && index === 0 ? firstLinkRef : undefined}
        as={NavLink}
        to={to}
        end={end}
        {...linkStyles}
        {...(isMobile
          ? { mb: 4, display: "block", onClick: onLinkClick }
          : { mr: 4 })}
        sx={{ "&.active": activeLinkStyles }}
      >
        {label}
      </Link>
    ))}
  </>
);

const PhoneBlock = ({ inDrawer = false }) => (
  <Flex
    fontSize="2xl"
    direction="row"
    color="fg.default"
    gap={2}
    align="center"
    {...(inDrawer
      ? { mt: 4, pt: 4, borderTopWidth: 1, borderColor: "border.default" }
      : {})}
  >
    <PhoneIcon />
    <Text as="a" href={`tel:${PHONE.replace(/-/g, "")}`}>
      {PHONE}
    </Text>
  </Flex>
);

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const firstDrawerLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  return (
    <Box
      as="header"
      bg="bg.subtle"
      color="fg.default"
      py={2}
      px={{ base: 3, md: 6 }}
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow={scrolled ? "md" : "none"}
      borderBottom="1px solid"
      borderColor="border.default"
      transition="box-shadow 0.2s"
    >
      <Link
        href="#main-content"
        position="absolute"
        left="-9999px"
        top={2}
        bg="bg.default"
        color="fg.default"
        px={3}
        py={1.5}
        fontWeight="bold"
        borderRadius="md"
        zIndex="dropdown"
        _focus={{ left: 4 }}
        transition="left 0.2s"
      >
        Skip to main content
      </Link>

      <Flex align="center" justify="space-between" py={1} px={0}>
        <Heading as="h1" size="lg" color="fg.default">
          <Link
            as={NavLink}
            to="/"
            _hover={{ color: "accent.solid" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "accent.muted",
              outlineOffset: "2px",
            }}
          >
            Service With Heart
          </Link>
        </Heading>

        {isDesktop ? (
          <>
            <Flex as="nav" aria-label="Main" wrap="wrap" align="center">
              {NAV_ITEMS.map(({ to, label, end }) => (
                <Link
                  key={to}
                  as={NavLink}
                  to={to}
                  end={end}
                  mr={4}
                  {...linkStyles}
                  sx={{
                    "&.active": activeLinkStyles,
                  }}
                >
                  {label}
                </Link>
              ))}
            </Flex>
            <PhoneBlock />
          </>
        ) : (
          <>
            <IconButton
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              icon={<HamburgerIcon boxSize={6} />}
              variant="ghost"
              color="fg.default"
              size="lg"
              onClick={onOpen}
              _hover={{ bg: "bg.muted", color: "accent.solid" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "accent.muted",
                outlineOffset: "2px",
              }}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="xs"
              initialFocusRef={firstDrawerLinkRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="bg.subtle" color="fg.default">
                <DrawerCloseButton
                  aria-label="Close menu"
                  color="fg.default"
                  size="lg"
                  _hover={{ color: "accent.solid" }}
                />
                <DrawerHeader
                  pt={10}
                  pb={4}
                  mb={2}
                  borderBottomWidth="1px"
                  borderColor="border.default"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="fg.muted"
                  letterSpacing="wider"
                  textTransform="uppercase"
                >
                  Menu
                </DrawerHeader>
                <DrawerBody>
                  <Flex as="nav" aria-label="Main" direction="column">
                    <NavLinks
                      isMobile
                      onLinkClick={onClose}
                      firstLinkRef={firstDrawerLinkRef}
                    />
                  </Flex>
                  <PhoneBlock inDrawer />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
