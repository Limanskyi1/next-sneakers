import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru'
});
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);