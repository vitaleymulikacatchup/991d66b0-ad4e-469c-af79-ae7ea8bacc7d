"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ShoppingBag, Tv, Globe, Star, Sparkles, Crown, Eye, Award, TrendingUp, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function EpisodesPage() {
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
            { name: "Home", id: "/" },
            { name: "Cast", id: "/cast" },
            { name: "News", id: "/news" }
          ]}
          brandName="Stranger Things"
          button={{ text: "Stream right Now eeee", href: "" }}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Official Merchandise"
          description="Show your Stranger Things fandom with official collectibles, apparel, and exclusive items."
          tag="Shop Now"
          tagIcon={ShoppingBag}
          buttons={[
            {
              text: "Shop All",
              href: "https://store.netflix.com/stranger-things"
            },
            {
              text: "New Arrivals",
              href: "https://store.netflix.com/new"
            }
          ]}
          textboxLayout="split"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          products={[
            {
              id: "1",
              brand: "Netflix Store",
              name: "Season 5 Official Poster",
              price: "$19.99",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things official poster"
            },
            {
              id: "2",
              brand: "Netflix Store",
              name: "Upside Down T-Shirt",
              price: "$24.99",
              rating: 5,
              reviewCount: "4.1k",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things t-shirt merchandise"
            },
            {
              id: "3",
              brand: "Funko Pop",
              name: "Eleven Collectible Figure",
              price: "$12.99",
              rating: 5,
              reviewCount: "8.7k",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things collectible figures"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Stream Stranger Things"
          description="Choose your perfect plan to watch all seasons of Stranger Things and thousands of other shows and movies."
          tag="Streaming Plans"
          tagIcon={Tv}
          buttons={[
            {
              text: "Compare Plans",
              href: "https://help.netflix.com/plans"
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          plans={[
            {
              id: "basic",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$15.49/mo",
              subtitle: "Perfect for most viewers",
              features: [
                "Watch on 1 device at a time",
                "HD streaming quality",
                "All Stranger Things seasons",
                "Unlimited viewing time",
                "Download to 1 device"
              ]
            },
            {
              id: "standard",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "$22.99/mo",
              subtitle: "Great for families",
              features: [
                "Watch on 2 devices at a time",
                "Full HD streaming quality",
                "All Netflix originals",
                "Download to 2 devices",
                "Ad-free experience"
              ]
            },
            {
              id: "premium",
              badge: "Ultimate",
              badgeIcon: Crown,
              price: "$29.99/mo",
              subtitle: "Best viewing experience",
              features: [
                "Watch on 4 devices at a time",
                "4K Ultra HD streaming",
                "Dolby Atmos sound",
                "Download to 6 devices",
                "Premium exclusive content"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Breaking Records Worldwide"
          description="Stranger Things continues to shatter viewing records and captivate audiences across the globe."
          tag="Global Impact"
          tagIcon={Globe}
          buttons={[
            {
              text: "View Stats",
              href: "https://top10.netflix.com"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              icon: Eye,
              title: "Global Viewers",
              value: "286M+"
            },
            {
              id: "2",
              icon: Award,
              title: "Emmy Nominations",
              value: "65+"
            },
            {
              id: "3",
              icon: TrendingUp,
              title: "Seasons Produced",
              value: "5"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Fan Reactions to Season 5"
          description="See what viewers are saying about the epic finale of Stranger Things"
          tag="Fan Reviews"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alexandra Williams",
              role: "Superfan",
              company: "Netflix Subscriber",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Alexandra Williams fan review"
            },
            {
              id: "2",
              name: "David Thompson",
              role: "Binge Watcher",
              company: "Day One Fan",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "David Thompson fan review"
            },
            {
              id: "3",
              name: "Jessica Park",
              role: "TV Critic",
              company: "Entertainment Today",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Jessica Park professional review"
            },
            {
              id: "4",
              name: "Michael Chang",
              role: "Streaming Expert",
              company: "Tech Reviews",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Michael Chang expert review"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Stranger Things Last season"
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