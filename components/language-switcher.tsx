'use client';

import * as React from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { routing } from '@/i18n/routing';
import Flag from 'react-world-flags';

const locales = routing.locales;

const getLocaleName = (locale: string) => {
  return new Intl.DisplayNames([locale], {type: 'language'}).of(locale) || locale;
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src="/globe.svg"
            alt="Change language"
            width={20}
            height={20}
            className="h-[1.2rem] w-[1.2rem]"
          />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            disabled={currentLocale === locale}
            className='cursor-pointer'
          >
            <div className="flex items-center gap-2">
              <Flag code={locale === 'en' ? 'gb' : locale} style={{ width: '20px', height: '15px' }} />
              <span className="capitalize">{getLocaleName(locale)}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
