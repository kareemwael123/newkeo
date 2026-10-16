/* ============================================================================
   KeoAI PRO — runtime configuration
   ============================================================================
   This file is loaded as a <script> BEFORE index.html's main script. It
   exposes a single global: `window.KEO_CONFIG`. All API keys, model IDs,
   and engine URLs are read from this object — the main script never has
   hardcoded keys.

   ┌── How to use ───────────────────────────────────────────────────────────┐
   │  1. For local / static deployment:                                      │
   │     Fill in the values below. Browsers can't read .env directly, so    │
   │     this is the file that actually serves the keys to the client.      │
   │                                                                        │
   │  2. For CI / build-pipeline deployment:                                 │
   │     Replace the inline values with `process.env.X` lookups during     │
   │     the build step (e.g. with Vite, Webpack DefinePlugin, or a simple  │
   │     sed-based injector).                                               │
   │                                                                        │
   │  3. NEVER commit real keys to a public repo. Add both `.env` and       │
   │     `config.js` to your `.gitignore`.                                 │
   └────────────────────────────────────────────────────────────────────────┘
   ============================================================================ */

window.KEO_CONFIG = {
  /* ===== Primary engine (the "private core" — never reveal vendor) ===== */
  HF_URL: 'https://router.huggingface.co/v1',
  HF_KEY: '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',

  /* Strongest frontier models, ordered by power. The router rotates
     through them automatically and falls back silently on rate-limit. */
  HF_TEXT: [
    'Qwen/Qwen3-235B-A22B-Instruct',          /* flagship — top reasoning */
    'deepseek-ai/DeepSeek-V3.1',              /* 671B MoE — strong coder */
    'deepseek-ai/DeepSeek-R1',                /* reasoning specialist */
    'meta-llama/Llama-3.3-70B-Instruct',
    'Qwen/Qwen3-32B-Instruct',
    'mistralai/Mistral-Large-2411',
    'CohereForAI/c4ai-command-a-03-2025',    /* multilingual champ */
    'moonshotai/Kimi-K2-Instruct',           /* 1T context */
    'Qwen/Qwen2.5-72B-Instruct',
    'meta-llama/Llama-3.1-8B-Instruct'
  ],
  HF_VISION: [
    'Qwen/Qwen2.5-VL-72B-Instruct',
    'meta-llama/Llama-4-Maverick-17B-128E-Instruct',
    'meta-llama/Llama-4-Scout-17B-16E-Instruct',
    'Qwen/Qwen2.5-VL-7B-Instruct',
    'meta-llama/Llama-3.2-11B-Vision-Instruct'
  ],

  /* ===== Fallback engine (only used if primary rate-limits) ===== */
  AI_URL: 'https://api.groq.com/openai/v1',
  AI_KEY: '',  /* set this in the Owner Panel after sign-in, or here */

  CORE_CHAIN: [
    'openai/gpt-oss-120b',
    'moonshotai/kimi-k2-instruct',
    'qwen/qwen3-32b',
    'llama-3.3-70b-versatile',
    'meta-llama/llama-4-maverick-17b-128e-instruct',
    'meta-llama/llama-4-scout-17b-16e-instruct',
    'openai/gpt-oss-20b',
    'llama-3.1-8b-instant'
  ],
  CORE_VISION: [
    'meta-llama/llama-4-maverick-17b-128e-instruct',
    'meta-llama/llama-4-scout-17b-16e-instruct',
    'meta-llama/llama-3.2-90b-vision-instruct-preview'
  ],

  /* ===== Live voice ===== */
  ELEVEN_URL: 'https://api.elevenlabs.io/v1',
  ELEVEN_KEY: 'sk_8ceab238830888efd7da5e323d7450db60715759280b8e5a',
  ELEVEN_VOICE: '21m00Tcm4TlvDq8ikWAM',  /* Rachel — multilingual AR+EN */
  ELEVEN_MODEL: 'eleven_multilingual_v2',
  ELEVEN_VOICES: [
    { id:'21m00Tcm4TlvDq8ikWAM',  name:'Rachel (female, warm)' },
    { id:'pNInz6obpgDQGcFmaJgB',  name:'Adam (male, natural)' },
    { id:'ErXwobaYiN019PkySvjV',  name:'Antoni (male, cool)' },
    { id:'EXAVITqu4Z4syx0X5175',  name:'Bella (female, soft)' },
    { id:'onwK4e9ZLuqAKypXkn55',  name:'Gigi (female, young)' }
  ],

  /* ===== Firebase (auth + RTDB) ===== */
  FIREBASE: {
    apiKey: "AIzaSyC0lwVRTBPA3yxnZ3wuqvyfQJbJP-AVNJo",
    authDomain: "kareem-8ed77.firebaseapp.com",
    databaseURL: "https://kareem-8ed77-default-rtdb.firebaseio.com",
    projectId: "kareem-8ed77",
    storageBucket: "kareem-8ed77.firebasestorage.app",
    messagingSenderId: "557227389584",
    appId: "1:557227389584:web:557227389584",
    measurementId: "G-919VM45PXW"
  },

  /* ===== Owner / admin ===== */
  ADMIN_EMAIL: 'kareemwael0213@gmail.com',
  OWNER_EMAIL: 'kareemwael0213@gmail.com',

  /* ===== Engine tuning ===== */
  MODEL_ID: 'keo-core',
  MAXTOK: 65536,        /* big enough for large multi-file code dumps */
  HISTORY_TURNS: 30,
  MAX_FILE_MB: 10,
  MAX_TEXT_CHARS: 1000000   /* raised — paste up to 1 million characters */
};
