export async function getDynamicIcon(iconName: string) {
  const libraries = [
    "fa", // FontAwesome
    "fa6",
    "md", // Material
    "gi", // Game Icons
    "io", // Ionicons
    "io5",
    "bs",
    "bi",
    "ri", // Remix Icons
    "hi", // Heroicons
    "hi2",
    "si", // Simple Icons
    "tb", // Tabler
    "pi", // Phosphor
    "ti",
    "im",
    "cg",
  ];

  for (const lib of libraries) {
    try {
      const module = await import(`react-icons/${lib}`);
      if (module[iconName]) return module[iconName];
    } catch (err) {
      // ignore and continue
    }
  }

  return null;
}
