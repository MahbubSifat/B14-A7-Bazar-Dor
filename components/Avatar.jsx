export default function Avatar({ user, size = 36 }) {
  const boxStyle = { width: size, height: size };

  if (user.image) {
    return (
      // normal <img> use korlam, karon Google/GitHub-er domain next/image-e config na kore chole na
      <img
        src={user.image}
        alt={user.name}
        referrerPolicy="no-referrer"
        style={boxStyle}
        className="rounded-lg object-cover"
      />
    );
  }

  const letter = user.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <div
      style={boxStyle}
      className="rounded-lg bg-brand text-white flex items-center justify-center font-bold"
    >
      {letter}
    </div>
  );
}