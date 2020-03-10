import Typography from "typography";
import theme from 'typography-theme-japanese-tofu';
import 'typeface-lato'

// theme.headerFontFamily = ['Lato'];
// theme.bodyFontFamily = ['Lato'];

theme.headerFontFamily = ['Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS PGothic', 'sans-serif'];
theme.bodyFontFamily = ['Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS PGothic', 'sans-serif'];

const typography = new Typography(theme);

export default typography;