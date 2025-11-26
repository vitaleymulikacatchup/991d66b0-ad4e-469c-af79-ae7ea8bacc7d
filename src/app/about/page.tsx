"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Camera, MessageSquare, Tv, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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

      <div id="team" data-section="team">
        <TeamCardOne
          title="The Talented Cast & Crew"
          description="Meet the incredible people who bring the world of Stranger Things to life."
          tag="Behind the Scenes"
          tagIcon={Camera}
          buttons={[
            {
              text: "Full Credits",
              href: "https://imdb.com/title/tt4574334"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "The Duffer Brothers",
              role: "Creators & Directors",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Duffer Brothers creators portrait"
            },
            {
              id: "2",
              name: "Millie Bobby Brown",
              role: "Eleven",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Millie Bobby Brown actress"
            },
            {
              id: "3",
              name: "Finn Wolfhard",
              role: "Mike Wheeler",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Finn Wolfhard actor"
            },
            {
              id: "4",
              name: "Gaten Matarazzo",
              role: "Dustin Henderson",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Gaten Matarazzo actor"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Critical Acclaim & Fan Love"
          description="See what critics and fans are saying about the final season of Stranger Things."
          tag="Reviews"
          tagIcon={MessageSquare}
          buttons={[
            {
              text: "More Reviews",
              href: "https://rottentomatoes.com/tv/stranger_things"
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "James Hibberd",
              role: "Entertainment Weekly Chief TV Critic",
              testimonial: "Stranger Things Season 5 delivers an emotionally devastating and visually spectacular conclusion that will leave fans both satisfied and heartbroken.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Entertainment Weekly critic"
            },
            {
              id: "2",
              name: "Caroline Framke",
              role: "Variety Senior TV Critic",
              testimonial: "The Duffer Brothers have crafted a masterful ending that honors the show's legacy while pushing the boundaries of what television can achieve.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Variety magazine critic"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Netflix Subscriber",
              testimonial: "I've been watching since day one and this finale exceeded all my expectations. An absolute masterpiece that will be remembered forever.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things fan viewer"
            },
            {
              id: "4",
              name: "Marcus Rodriguez",
              role: "Streaming Enthusiast",
              testimonial: "The emotional depth and incredible performances make this the perfect send-off for one of the greatest shows of our generation.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Netflix subscriber viewer"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Available on All Major Platforms"
          description="Watch Stranger Things on your favorite streaming service and never miss a moment of the action."
          tag="Streaming Partners"
          tagIcon={Tv}
          textboxLayout="default"
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
          speed={35}
          showCard={true}
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