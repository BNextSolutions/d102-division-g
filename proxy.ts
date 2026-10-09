import {NextRequest,NextResponse} from 'next/server';
export function proxy(request:NextRequest){const headers=new Headers(request.headers);const part=request.nextUrl.pathname.split('/')[1];headers.set('x-site-locale',part==='zh'||part==='ms'?part:'en');headers.set('x-site-path',request.nextUrl.pathname);return NextResponse.next({request:{headers}});}
export const config={matcher:['/((?!api|_next|images|favicon.ico|robots.txt|sitemap.xml).*)']};
