import {notFound} from 'next/navigation';
import TranslatedPage from '@/components/translated-page';
import {clubs,posts} from '@/lib/content';
import {copy,languagePath,type Locale} from '@/lib/languages';
import {pageMetadata} from '@/lib/seo';
const routes=['','clubs','blog','about','visit','why-us','connect-with-us'];
function valid(locale:string,path:string[]){return ['zh','ms'].includes(locale)&&(path.length===0||(path.length===1&&routes.includes(path[0]))||(path.length===2&&((path[0]==='clubs'&&clubs.some(c=>c.slug===path[1]))||(path[0]==='blog'&&posts.some(p=>p.slug===path[1])))));}
export async function generateMetadata({params}:{params:Promise<{locale:string;path?:string[]}>}){const {locale,path=[]}=await params;if(!valid(locale,path))return{};const lang=locale as Locale,t=copy[lang],route='/'+path.join('/'),labels:Record<string,string>={clubs:t.clubs,blog:t.blog,about:t.about,visit:t.visit,'why-us':t.why,'connect-with-us':t.connect};const title=path.length===2?(path[0]==='clubs'?clubs.find(c=>c.slug===path[1])?.name:posts.find(p=>p.slug===path[1])?.title):labels[path[0]]??t.home;const meta=pageMetadata(title??t.home,t.intro,languagePath(lang,route));return {...meta,alternates:{canonical:languagePath(lang,route),languages:{'en-MY':route,'zh-Hans':languagePath('zh',route),'ms-MY':languagePath('ms',route)}},openGraph:{...meta.openGraph,locale:lang==='zh'?'zh_CN':'ms_MY'}};}
export default async function Localized({params}:{params:Promise<{locale:string;path?:string[]}>}){const {locale,path=[]}=await params;if(!valid(locale,path))notFound();return <TranslatedPage locale={locale as Locale} path={path}/>;}
