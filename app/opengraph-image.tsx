import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NinjaKana - Apprends les kana japonais en 30 jours';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #312e81 100%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <span style={{ fontSize: '72px' }}>🥷</span>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: 'white',
              }}
            >
              <span style={{ color: '#818cf8' }}>Ninja</span>Kana
            </span>
          </div>

          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            Maîtrise les kana en 30 jours
          </div>

          <div
            style={{
              fontSize: '28px',
              color: '#a5b4fc',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            92 caractères • Répétition espacée • 250 audio natifs
          </div>

          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.3)',
                padding: '16px 24px',
                borderRadius: '16px',
                color: 'white',
                fontSize: '24px',
                fontWeight: 600,
              }}
            >
              <span>あ</span>
              <span>Hiragana</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.3)',
                padding: '16px 24px',
                borderRadius: '16px',
                color: 'white',
                fontSize: '24px',
                fontWeight: 600,
              }}
            >
              <span>ア</span>
              <span>Katakana</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.3)',
                padding: '16px 24px',
                borderRadius: '16px',
                color: 'white',
                fontSize: '24px',
                fontWeight: 600,
              }}
            >
              <span>漢</span>
              <span>Kanji N5</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
