import { Appearance, useColorScheme } from "react-native";

// 监测用户是否开启了暗色（夜间）模式，
// 这里还有一个 rn hook useColorTheme
// dark, light, null
const colorScheme = Appearance.getColorScheme();
console.log(colorScheme)

const scheme = useColorScheme();
console.log(scheme)
