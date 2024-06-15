export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard/:path*", "/categorias/:path*", "/biblioteca/:path*", "/perfil", "/home", "/layout"]};

