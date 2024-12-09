type AvatarProps = { src: string; alt: string };

function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="size-8 rounded-full" />;
}

export default Avatar;
