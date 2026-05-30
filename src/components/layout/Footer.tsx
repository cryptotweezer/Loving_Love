import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>Copyright © 2019 by Loving Love</p>
      <div>
        {/* Social links — URLs to be confirmed by Lena */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a
          href="https://www.instagram.com/LovingLove"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <Link href="/connect">Connect</Link>
    </footer>
  );
}
