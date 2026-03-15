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
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FiPhone, FiMenu } from "react-icons/fi";
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
  _focus: { outline: "none" },
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
    <Icon as={FiPhone} boxSize={5} />
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
      boxShadow={scrolled ? "md" : "0 2px 6px rgba(0,0,0,0.06)"}
      borderBottom="1px solid"
      borderColor="rgba(0,0,0,0.08)"
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
            _focus={{ outline: "none" }}
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
              icon={<Icon as={FiMenu} boxSize={6} />}
              variant="ghost"
              color="fg.default"
              size="lg"
              onClick={onOpen}
              _hover={{ bg: "bg.muted", color: "accent.solid" }}
              _focus={{ outline: "none" }}
            />
            <Drawer.Root
              open={isOpen}
              onOpenChange={(e) => (e.open ? onOpen() : onClose())}
              placement="end"
              size="xs"
            >
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content bg="bg.subtle" color="fg.default" height="100%">
                    <Drawer.CloseTrigger
                      aria-label="Close menu"
                      color="fg.default"
                      size="lg"
                      position="absolute"
                      top={4}
                      right={4}
                      _hover={{ color: "accent.solid" }}
                      _focus={{ outline: "none" }}
                    />
                    <Drawer.Header
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
                    </Drawer.Header>
                    <Drawer.Body>
                      <Flex as="nav" aria-label="Main" direction="column">
                        <NavLinks
                          isMobile
                          onLinkClick={onClose}
                          firstLinkRef={firstDrawerLinkRef}
                        />
                      </Flex>
                      <PhoneBlock inDrawer />
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
