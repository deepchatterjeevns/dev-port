'use client';

import { useTheme } from '@/components/theme-provider';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, India',
    color: 'emerald',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@deepchatterjee.com',
    href: 'mailto:hello@deepchatterjee.com',
    color: 'cyan',
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export function ContactSection() {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`py-24 px-6 ${theme === 'dark' ? 'bg-neutral-900/50' : 'bg-gray-50'
      }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps solutions? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div
                className={`p-6 rounded-xl border text-center transition-all duration-300 ${theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 hover:border-emerald-500/30'
                  : 'bg-white border-gray-200 hover:border-emerald-500/50 hover:shadow-lg'
                  }`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${theme === 'dark'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-emerald-500/10 text-emerald-600'
                  }`}>
                  <Icon size={24} />
                </div>
                <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  {item.label}
                </h3>
                <p className={`${item.href ? 'text-emerald-500 hover:text-emerald-400' : 'text-muted-foreground'
                  }`}>
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a key={index} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div className="text-center">
          <p className={`mb-6 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}>
            Find me on
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${theme === 'dark'
                    ? 'border-neutral-700 text-neutral-400 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10'
                    }`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className={`mt-12 p-6 rounded-xl border text-center ${theme === 'dark'
          ? 'bg-emerald-500/5 border-emerald-500/20'
          : 'bg-emerald-50 border-emerald-200'
          }`}>
          <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            Let&apos;s build something amazing together
          </p>
          <p className="text-muted-foreground text-sm">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
      </div>
    </section>
  );
}
