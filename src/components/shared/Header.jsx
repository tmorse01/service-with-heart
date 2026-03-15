import { useState, useEffect, useRef } from "react";
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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaPhone, FaBars } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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

const isActivePath = (pathname, to, end) =>
  pathname === to || (!end && pathname.startsWith(to + "/"));

const NavLinks = ({
  isMobile = false,
  onLinkClick,
  firstLinkRef,
  currentPath,
}) => (
  <>
    {NAV_ITEMS.map(({ to, label, end }, index) =>
      isMobile ? (
        <Box
          key={to}
          ref={index === 0 ? firstLinkRef : undefined}
          as="button"
          type="button"
          onClick={() => onLinkClick?.(to)}
          display="block"
          py={3}
          px={2}
          mb={1}
          minH="44px"
          fontSize="lg"
          borderRadius="md"
          textAlign="left"
          width="100%"
          bg="transparent"
          border="none"
          cursor="pointer"
          fontFamily="inherit"
          {...linkStyles}
          _active={{ bg: "bg.muted" }}
          sx={
            currentPath && isActivePath(currentPath, to, end)
              ? { ...linkStyles, ...activeLinkStyles }
              : undefined
          }
        >
          {label}
        </Box>
      ) : (
        <Link
          key={to}
          as={NavLink}
          to={to}
          end={end}
          {...linkStyles}
          mr={4}
          sx={{ "&.active": activeLinkStyles }}
        >
          {label}
        </Link>
      ),
    )}
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
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const firstDrawerLinkRef = useRef(null);

  const handleMobileNavClick = (to) => {
    setOpen(false);
    navigate(to);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Box
      as="header"
      bg="bg.subtle"
      color="fg.default"
      py={2}
      px={{ base: 3, lg: 6 }}
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
          minW={{ base: 0, lg: "min-content" }}
          flex={{ base: "1", lg: "0 0 auto" }}
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
              flex="1 1 auto"
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
            <Flex flex="0 0 auto" minW="min-content" justify="flex-end">
              <PhoneBlock />
            </Flex>
          </>
        ) : (
          <Drawer.Root
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
            placement="end"
            size="xs"
          >
            <Drawer.Trigger asChild>
              <IconButton
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
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
                        onLinkClick={handleMobileNavClick}
                        firstLinkRef={firstDrawerLinkRef}
                        currentPath={location.pathname}
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
