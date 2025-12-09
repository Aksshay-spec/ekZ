import { FiBox } from "react-icons/fi";

export async function getDynamicIcon(iconName: string) {
  const libraries = [
    "fa",
    "fa6",
    "md",
    "gi",
    "io",
    "io5",
    "bs",
    "bi",
    "ri",
    "hi",
    "hi2",
    "si",
    "tb",
    "pi",
    "ti",
    "im",
    "cg",
  ];

  for (const lib of libraries) {
    try {
      const module = await import(`react-icons/${lib}`);
      if (module[iconName]) return module[iconName];
    } catch (err) {
      console.error(`Icon load failed: ${iconName} from ${lib}`, err);
    }
  }

  // Default fallback icon
  return FiBox;
}
