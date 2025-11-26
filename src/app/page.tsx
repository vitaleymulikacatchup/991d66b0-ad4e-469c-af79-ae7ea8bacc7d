"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Play, Users, Film, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Episodes", id: "/episodes" },
            { name: "Cast", id: "/cast" },
            { name: "News", id: "/news" }
          ]}
          brandName="Stranger Things"
          button={{
            text: "Stream Now",
            href: "https://netflix.com/title/80057281"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="The Final Chapter Awaits"
          description="Hawkins faces its darkest hour as the Upside Down threatens to consume everything. Join Eleven and the gang for their ultimate battle in Stranger Things Season 5."
          tag="Now Streaming"
          tagIcon={Play}
          buttons={[
            {
              text: "Watch Trailer",
              href: "https://youtube.com/watch?v=strangertrailer"
            },
            {
              text: "Start Watching",
              href: "https://netflix.com/title/80057281"
            }
          ]}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Stranger Things Season 5 dark supernatural atmosphere"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Season 5 Episodes"
          description="Experience the most intense and emotional season yet with epic battles, shocking revelations, and heartbreaking farewells."
          tag="New Episodes"
          tagIcon={Film}
          buttons={[
            {
              text: "Watch Now",
              href: "https://netflix.com/title/80057281"
            },
            {
              text: "Episode Guide",
              href: "/news"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "The Final Battle Begins",
              description: "As the Upside Down bleeds into Hawkins, Eleven must master her powers while the gang prepares for their ultimate confrontation with Vecna.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things Season 5 dark scenes"
            },
            {
              id: 2,
              title: "Monsters Unleashed",
              description: "New creatures from the Upside Down emerge as our heroes discover the true extent of the supernatural threat facing their world.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things upside down monsters"
            },
            {
              id: 3,
              title: "Hawkins Falls",
              description: "The town of Hawkins becomes the epicenter of a supernatural war that will determine the fate of both worlds.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things Hawkins town supernatural"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Stranger Things"
          columns={[
            {
              title: "Series",
              items: [
                { label: "Episodes", href: "/episodes" },
                { label: "Cast & Crew", href: "/cast" },
                { label: "Behind the Scenes", href: "/news" },
                { label: "Season Guide", href: "https://netflix.com/title/80057281" }
              ]
            },
            {
              title: "Watch",
              items: [
                { label: "Netflix", href: "https://netflix.com/title/80057281" },
                { label: "Plans & Pricing", href: "/pricing" },
                { label: "Free Trial", href: "https://netflix.com/signup" },
                { label: "Download App", href: "https://netflix.com/download" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Fan Reviews", href: "/about" },
                { label: "Discussion Forums", href: "https://reddit.com/r/StrangerThings" },
                { label: "Fan Art", href: "https://instagram.com/strangerthingstv" },
                { label: "Theories", href: "https://strangerthings.fandom.com" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/strangerthingstv",
              ariaLabel: "Follow on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/strangerthings",
              ariaLabel: "Follow on Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/StrangerThingsTV",
              ariaLabel: "Follow on Facebook"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/c/StrangerThings",
              ariaLabel: "Subscribe on YouTube"
            }
          ]}
          copyrightText="© 2024 Netflix, Inc. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}