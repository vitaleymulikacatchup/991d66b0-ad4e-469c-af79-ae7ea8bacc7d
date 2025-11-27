"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Camera, MessageSquare, Tv, Instagram, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function CastPage() {
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
            { name: "News", id: "/news" }
          ]}
          brandName="Stranger Things"
          button={{  text: "Stream right Now LAST", href: "google.com"  }}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
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
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "The Duffer Brothers",
              role: "Creators & Directors",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Duffer Brothers creators portrait",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/dufferfamily" },
                { icon: Instagram, url: "https://instagram.com/dufferbros" }
              ]
            },
            {
              id: "2",
              name: "Millie Bobby Brown",
              role: "Eleven",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Millie Bobby Brown actress",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/milliebobbybrown" },
                { icon: Twitter, url: "https://twitter.com/milliestopshate" }
              ]
            },
            {
              id: "3",
              name: "Finn Wolfhard",
              role: "Mike Wheeler",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Finn Wolfhard actor",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/finnwolfhardofficial" },
                { icon: Twitter, url: "https://twitter.com/finnwolfhard" }
              ]
            },
            {
              id: "4",
              name: "Gaten Matarazzo",
              role: "Dustin Henderson",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Gaten Matarazzo actor",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/gatenm123" },
                { icon: Twitter, url: "https://twitter.com/gatenm123" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Critical Acclaim & Fan Love"
          description="See what critics and fans are saying about the final season of Stranger Things."
          tag="Reviews"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "James Hibberd",
              role: "Entertainment Weekly",
              company: "Chief TV Critic",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Entertainment Weekly critic"
            },
            {
              id: "2",
              name: "Caroline Framke",
              role: "Variety",
              company: "Senior TV Critic",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Variety magazine critic"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Netflix Subscriber",
              company: "Fan Since Day One",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
              imageAlt: "Stranger Things fan viewer"
            },
            {
              id: "4",
              name: "Marcus Rodriguez Gonzales",
              role: "Streaming Enthusiast",
              company: "Binge Watcher",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764252605003-wf1evr66.jpg",
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