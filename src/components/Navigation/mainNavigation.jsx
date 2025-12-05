import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./mainNavigation.css";
import { useMediaQuery } from "react-responsive";
import { Code2, Menu, X, ChevronRight } from "lucide-react";
import navDataRaw from "./nav-data.json";
import { Button } from "../ui/button";
import BookCallDialog from "../Booking/BookCallDialog";

// --- Resolve route vs. hash links ---
function useResolvedNavData() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  return useMemo(
    () =>
      navDataRaw.map((item) => {
        if (item.type === "hash") {
          return {
            ...item,
            to: onHome ? `#${item.hash}` : `/#${item.hash}`,
            isHash: true,
          };
        }
        return { ...item, isHash: false };
      }),
    [pathname]
  );
}

const MainNavigation = () => {
  const [open, setOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false); 

  const triggerRef = useRef(null);
  const pendingActionRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const navData = useResolvedNavData();

  const toggle = () => setOpen((s) => !s);
  const close = () => setOpen(false);
  const openBooking = () => setBookOpen(true);

  // --- Manage body scroll + focus ---
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  // --- Close when route/hash changes ---
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close when route/hash changes (existing) + handle pending action
    useEffect(() => {
        if (!open && pendingActionRef.current) {
        if (pendingActionRef.current === "book") {
            setBookOpen(true);              // open the dialog now
        }
        pendingActionRef.current = null;  // clear queue
        }
    }, [open]);

  // --- Smooth-scroll helper ---
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- Handlers ---
  const handleRouteClick = (path, e) => {
    e.preventDefault();
    navigate(path);
    setOpen(false);
  };

  const handleHashClick = (item, e) => {
    e.preventDefault();
    const hash = item.hash;
    setOpen(false);

    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      navigate(`/#${hash}`);
    }
  };

  // --- Desktop Navigation ---
  const WebNav = () => (
    <div className="links-container flex items-center gap-6 text-sm">
      {navData.map((item) =>
        item.isHash ? (
          <a
            key={item.id}
            href={item.to}
            className="nav-text hover:text-slate-300"
            onClick={(e) => handleHashClick(item, e)}
          >
            {item.title}
          </a>
        ) : (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.exact || false}
            className={({ isActive }) =>
              `nav-text ${isActive ? "active" : ""} hover:text-slate-300`
            }
            onClick={(e) => handleRouteClick(item.path, e)}
          >
            {item.title}
          </NavLink>
        )
      )}
      <Button className="rounded-2xl" onClick={openBooking}>
        Book a call
      </Button>
    </div>
  );

  // --- Mobile Navigation ---
  const MobileNav = () => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
      closeBtnRef.current?.focus();
    }, []);

    return (
      <>
        <nav
          className="nav-menu active"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-panel">
            {/* Top bar */}
            <div className="mobile-header">
              <span className="mobile-title">Menu</span>
              <button
                ref={closeBtnRef}
                className="mobile-close"
                onClick={close}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <div className="mobile-list">
              {navData.map((item) => {
                const cls = "mobile-item";
                if (item.isHash) {
                  return (
                    <a
                      key={item.id}
                      href={item.to}
                      className={cls}
                      onClick={(e) => handleHashClick(item, e)}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.exact || false}
                    className={({ isActive }) =>
                      `${cls} ${isActive ? "active" : ""}`
                    }
                    onClick={(e) => handleRouteClick(item.path, e)}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </NavLink>
                );
              })}
            </div>

            {/* Sticky footer CTA */}
            <div className="mobile-footer">
              <Button
                className="rounded-2xl w-full"
                onClick={() => {
                    pendingActionRef.current = "book"; // queue it
                    setOpen(false);                    // close the menu
                }}
                >
                Book a call
              </Button>
            </div>
          </div>
        </nav>

        <div className="nav-backdrop" onClick={close} />
      </>
    );
  };

  // --- Render ---
  return (
    <>
      <header className="sticky top-0 z-30 navigation">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          {/* Mobile row: menu + logo + name */}
          <div className="flex items-center gap-3">
            <button
              ref={triggerRef}
              className="p-2 menu-bars md:hidden"
              onClick={toggle}
              aria-expanded={open}
              aria-haspopup="dialog"
              aria-controls="mobile-nav"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link to="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-slate-900">
                Abdul Khan - Full-Stack Dev
              </span>
            </Link>
          </div>

          {/* Desktop navigation on the right */}
          <nav className="hidden md:flex ml-auto">
            <WebNav />
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-nav">
        {open ? <MobileNav /> : null}
      </div>

      <BookCallDialog
        open={bookOpen}
        onOpenChange={setBookOpen}
        bookingUrl="https://calendar.app.google/Gz8wEMoLTRPEk1uJA" // or use VITE_BOOKING_URL
      />
    </>
  );
};

export default MainNavigation;
