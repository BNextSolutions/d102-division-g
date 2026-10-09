'use client';
import {languagePath,type Locale} from '@/lib/languages';
export default function LanguageOptions({locale,path,label}:{locale:Locale;path:string;label:string}){const currentPath=usePathname()??path;const base=currentPath.replace(/^\/(zh|ms)(?=\/|$)/,'')||'/';return <nav className="language-options" aria-label={label}>{(['en','zh','ms'] as Locale[]).map(lang=><a key={lang} href={languagePath(lang,base)} hrefLang={lang==='zh'?'zh-Hans':lang} lang={lang==='zh'?'zh-Hans':lang} aria-current={locale===lang?'page':undefined}>{lang==='en'?'English':lang==='zh'?'中文':'Bahasa Melayu'}</a>)}</nav>;}

import {usePathname} from 'next/navigation';

