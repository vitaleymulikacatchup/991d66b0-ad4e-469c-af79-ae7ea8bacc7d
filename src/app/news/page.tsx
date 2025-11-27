"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, HelpCircle, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
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
            { name: "Episodes", id: "/episodes" },
            { name: "Cast", id: "/cast" }
          ]}
          brandName="Stranger Things Last seasson"
          button={{ text: "Stream right Now", href: "http://google.com" }}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News & Updates"
          description="Stay up to date with the latest Stranger Things news, behind-the-scenes content, and exclusive interviews."
          tag="Breaking News"
          tagIcon={BookOpen}
          buttons={[
            {
              text: "View All Articles",
              href: "https://netflix.com/tudum/stranger-things"
            },
            {
              text: "Subscribe",
              href: "#contact"
            }
          ]}
          textboxLayout="split"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Behind the Scenes",
              title: "The Making of Season 5's Epic Finale",
              excerpt: "Go behind the cameras for an exclusive look at how the Duffer Brothers crafted the most ambitious season yet.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Behind the scenes of Stranger Things Season 5",
              authorName: "Sarah Mitchell",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 15, 2024",
              onBlogClick: () => window.open("https://netflix.com/tudum/stranger-things-season-5-finale", "_blank")
            },
            {
              id: "2",
              category: "Cast Interviews",
              title: "Millie Bobby Brown Reflects on Eleven's Journey",
              excerpt: "The star opens up about saying goodbye to her iconic character and what the role has meant to her.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Millie Bobby Brown interview",
              authorName: "James Rodriguez",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 10, 2024",
              onBlogClick: () => window.open("https://netflix.com/tudum/millie-bobby-brown-eleven-interview", "_blank")
            },
            {
              id: "3",
              category: "Production Notes",
              title: "Creating the Upside Down's Final Form",
              excerpt: "Visual effects artists reveal how they brought the most terrifying version of the Upside Down to life.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Upside Down visual effects",
              authorName: "Elena Carter",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Dec 5, 2024",
              onBlogClick: () => window.open("https://netflix.com/tudum/upside-down-visual-effects", "_blank")
            },
            {
              id: "4",
              category: "Fan Community",
              title: "Fan Theories That Came True in Season 5",
              excerpt: "We explore the most accurate fan predictions and how the community helped shape the final season.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Stranger Things fan theories",
              authorName: "Alex Chen",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "Nov 28, 2024",
              onBlogClick: () => window.open("https://netflix.com/tudum/stranger-things-fan-theories", "_blank")
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about Stranger Things Season 5 and streaming options."
          tag="Help Center"
          tagIcon={HelpCircle}
          buttons={[
            {
              text: "Contact Support",
              href: "https://help.netflix.com/contactus"
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "When was Stranger Things Season 5 released?",
              content: "Stranger Things Season 5, the final season, was released on Netflix in December 2024. All episodes are now available to stream with your Netflix subscription."
            },
            {
              id: "2",
              title: "How many episodes are in Season 5?",
              content: "Season 5 consists of 8 episodes, with extended runtimes for the final season. The season finale is feature-length, providing an epic conclusion to the series."
            },
            {
              id: "3",
              title: "Do I need to watch previous seasons first?",
              content: "Yes, we highly recommend watching Seasons 1-4 before diving into Season 5. The final season builds on storylines and character development from all previous seasons."
            },
            {
              id: "4",
              title: "Is this really the final season?",
              content: "Yes, the Duffer Brothers have confirmed that Season 5 is the planned conclusion of Stranger Things. However, Netflix has announced spin-off projects set in the same universe."
            },
            {
              id: "5",
              title: "What devices can I watch on?",
              content: "You can watch Stranger Things on any device that supports Netflix: smart TVs, computers, phones, tablets, gaming consoles, and streaming devices like Roku or Apple TV."
            },
            {
              id: "6",
              title: "Can I download episodes to watch offline?",
              content: "Yes, Netflix allows you to download episodes of Stranger Things to your mobile device or tablet for offline viewing. This feature is available on the Netflix mobile app."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Get Exclusive Stranger Things Updates"
          description="Be the first to know about new episodes, behind-the-scenes content, cast interviews, and special events. Join our newsletter for exclusive Stranger Things content delivered straight to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive emails from Netflix about Stranger Things and other series. You can unsubscribe at any time."
          onSubmit={(email) => console.log("Newsletter signup:", email)}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Reader Reviews"
          description="See what our newsletter subscribers are saying about our exclusive content and updates"
          tag="Subscriber Feedback"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "Newsletter Subscriber",
              company: "Fan Community Member",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Jennifer Walsh newsletter subscriber"
            },
            {
              id: "2",
              name: "Kevin Martinez",
              role: "Long-time Reader",
              company: "Streaming Enthusiast",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Kevin Martinez newsletter reader"
            },
            {
              id: "3",
              name: "Rachel Kim",
              role: "Content Creator",
              company: "YouTube Channel",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Rachel Kim content creator"
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