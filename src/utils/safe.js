// 값이 배열이 아니면 안전한 배열로, null/undefined면 빈 배열
export const arr = (v) => Array.isArray(v) ? v : (v == null ? [] : [v]);

// 문자열 안전 변환
export const text = (v) => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (typeof v === 'object') {
    // 자주 쓰는 필드 우선 사용
    const hit = v.name ?? v.title ?? v.label ?? v.id ?? null;
    if (hit) return String(hit);
    // 객체면 값들을 합쳐서 간단 표시
    try {
      const vals = Object.values(v).filter(Boolean).map(x => {
        if (typeof x === 'string' || typeof x === 'number') return String(x);
        if (Array.isArray(x)) return x.join(', ');
        return '';
      }).filter(Boolean);
      return vals.join(' / ') || '[object]';
    } catch {
      return '[object]';
    }
  }
  return '';
};

// skills 같은 데이터가 "카테고리 객체"일 수도 있어서, 섹션 묶음으로 변환
export const normalizeCategoryMap = (maybeMap) => {
  // 배열이면 그대로
  if (Array.isArray(maybeMap)) return [{ heading: null, items: maybeMap }];
  // 객체면 {key:Array}를 [{heading:key, items:Array}]로
  if (maybeMap && typeof maybeMap === 'object') {
    return Object.entries(maybeMap).map(([k, v]) => ({
      heading: k,
      items: Array.isArray(v) ? v : (v ? [v] : [])
    }));
  }
  // 그 외 타입은 문자열화해서 한 섹션으로
  return [{ heading: null, items: maybeMap ? [maybeMap] : [] }];
};
