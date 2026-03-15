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
import { FaPhone, FaBars } from "react-icons/fa";
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
  fontWeight: "semibold",
  fontSize: "lg",
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
          ? {
              display: "block",
              onClick: onLinkClick,
              py: 3,
              px: 2,
              mb: 1,
              minH: "44px",
              fontSize: "lg",
              borderRadius: "md",
              _active: { bg: "bg.muted" },
            }
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
    fontSize="xl"
    direction="row"
    color="fg.default"
    gap={2}
    align="center"
    {...(inDrawer
      ? { mt: 4, pt: 4, borderTopWidth: 1, borderColor: "border.default" }
      : {})}
  >
    <Icon as={FaPhone} boxSize={5} />
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
        fontWeight="semibold"
        borderRadius="md"
        zIndex="dropdown"
        _focus={{ left: 4 }}
        transition="left 0.2s"
      >
        Skip to main content
      </Link>

      <Flex
        align="center"
        justify="space-between"
        py={1}
        px={0}
        gap={2}
        minW={0}
      >
        <Heading
          as="h1"
          size="lg"
          color="fg.default"
          minW={0}
          flex={{ base: "1", md: 1 }}
          noOfLines={1}
          title="Service With Heart"
        >
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
            <Flex
              as="nav"
              aria-label="Main"
              wrap="nowrap"
              align="center"
              flex={1}
              justify="center"
              minW={0}
            >
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
            <Flex flex={1} justify="flex-end" minW={0}>
              <PhoneBlock />
            </Flex>
          </>
        ) : (
            <Drawer.Root
              open={isOpen}
              onOpenChange={({ open }) => (open ? onOpen() : onClose())}
              placement="end"
              size="xs"
            >
              <Drawer.Trigger asChild>
                <IconButton
                  type="button"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  variant="ghost"
                  colorPalette="tealPrimary"
                  size="lg"
                  flexShrink={0}
                  minW={10}
                  minH={10}
                  _hover={{ bg: "bg.muted", color: "accent.solid" }}
                  _focus={{ outline: "none" }}
                  _active={{ bg: "bg.muted" }}
                  sx={{ "& svg": { pointerEvents: "none" } }}
                >
                  <FaBars />
                </IconButton>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content
                    bg="bg.subtle"
                    color="fg.default"
                    height="100%"
                    width="min(85vw, 280px)"
                  >
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
                      fontSize="md"
                      fontWeight="semibold"
                      color="fg.muted"
                      letterSpacing="nav"
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
        )}
      </Flex>
    </Box>
  );
};

export default Header;
