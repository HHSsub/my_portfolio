// 값이 배열이 아니면 안전한 배열로, null/undefined면 빈 배열
export const arr = (v) => Array.isArray(v) ? v : (v == null ? [] : [v]);
// 문자열 안전 변환
export const text = (v) => (v ?? '').toString();
