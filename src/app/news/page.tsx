"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { HelpCircle, Newspaper, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
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
            { name: "About", id: "/about" },
            { name: "Episodes", id: "/episodes" },
            { name: "Cast", id: "/cast" }
          ]}
          brandName="Stranger Things"
          button={{
            text: "Stream Now",
            href: "https://netflix.com/title/80057281"
          }}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Stranger Things Season 5 and streaming options."
          tag="Help Center"
          tagIcon={HelpCircle}
          buttons={[
            {
              text: "Contact Support",
              href: "https://help.netflix.com"
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "When was Season 5 released?",
              content: "Stranger Things Season 5 was released on Netflix in July 2024, marking the epic conclusion to the beloved series."
            },
            {
              id: "2",
              title: "Is this the final season?",
              content: "Yes, Season 5 serves as the final chapter of Stranger Things, wrapping up the story that began in Hawkins back in 2016."
            },
            {
              id: "3",
              title: "How many episodes are in Season 5?",
              content: "Season 5 features 8 feature-length episodes, with the finale running over 2 hours to give the story the epic conclusion it deserves."
            },
            {
              id: "4",
              title: "Do I need to watch previous seasons?",
              content: "Yes, we highly recommend watching Seasons 1-4 first as Season 5 concludes storylines and character arcs from throughout the series."
            },
            {
              id: "5",
              title: "Is there a way to watch for free?",
              content: "Netflix offers a free trial for new subscribers. You can also check if your mobile carrier or internet provider includes Netflix in their plans."
            },
            {
              id: "6",
              title: "Will there be spin-offs?",
              content: "While Stranger Things ends with Season 5, the Duffer Brothers have hinted at potential spin-off projects set in the same universe. Stay tuned for announcements!"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News & Behind the Scenes"
          description="Go deeper into the world of Stranger Things with exclusive content, cast interviews, and production insights."
          tag="Stranger Things Blog"
          tagIcon={Newspaper}
          buttons={[
            {
              text: "All Articles",
              href: "https://blog.netflix.com"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Behind the Scenes",
              title: "Creating the Upside Down: VFX Breakdown",
              excerpt: "Discover how the visual effects team brought the terrifying alternate dimension to life in Season 5's most intense sequences.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things behind the scenes production",
              authorName: "Netflix Production Team",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Set Design",
              title: "Building Hawkins for the Final Time",
              excerpt: "Take a farewell tour of the iconic sets and locations that have defined Stranger Things throughout its five-season run.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things set design upside down",
              authorName: "Production Design Team",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Cast Interviews",
              title: "The Cast Reflects on Their Journey",
              excerpt: "Emotional interviews with the main cast as they share their favorite memories and bid farewell to their iconic characters.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things cast interviews",
              authorName: "Entertainment Weekly",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Press & Media"
          title="Stay Connected"
          description="Get the latest updates, behind-the-scenes content, and exclusive Stranger Things news delivered straight to your inbox."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive Netflix promotional emails. You can unsubscribe at any time."
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