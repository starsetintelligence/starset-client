export const datasets = [
  {
    id: "hindi-conversational",
    title: "Hindi Conversational",
    category: "ASR",
    iconName: "Mic",
    shortDescription: "10,000+ hours of natural, spontaneous Hindi conversations across 15 states. Fully transcribed with speaker diarization and emotion tagging.",
    fullDescription: "Our Hindi Conversational dataset is the most comprehensive collection of spontaneous spoken Hindi available. Sourced from 15 different states, it captures the rich linguistic diversity, regional accents, and code-switching patterns typical of everyday Indian conversations. Every file is meticulously transcribed by native speakers and includes rich metadata such as speaker demographics, emotion tags, and precise timestamps.",
    features: [
      "Speaker Diarization (up to 4 speakers per audio)",
      "Emotion & Sentiment Tagging",
      "Rich Demographic Metadata (Age, Gender, Region)",
      "Natural Background Noise Variations"
    ],
    metrics: {
      hours: "10,000+",
      sampleRate: "16kHz",
      speakers: "50,000+",
      format: "WAV + JSON"
    },
    languages: ["Hindi", "Hinglish", "Bhojpuri-influenced Hindi", "Awadhi-influenced Hindi"],
    tags: ["10k Hours", "16kHz", "Consent Verified"],
    createdAt: "2024-01-15"
  },
  {
    id: "multilingual-commands",
    title: "Multilingual Commands",
    category: "Wake Word",
    iconName: "Globe2",
    shortDescription: "Voice commands and wake words in 12 Indian regional languages including Tamil, Telugu, Marathi, Bengali, and Gujarati.",
    fullDescription: "Designed specifically for smart devices, automotive assistants, and IoT applications, this dataset provides a balanced corpus of wake words, intent-based commands, and control phrases across India's most spoken regional languages. Recorded in controlled studio environments as well as simulated noisy environments.",
    features: [
      "Wake Word Variations & False Rejects",
      "Intent Classification Tags",
      "Studio & Simulated Far-field Audio",
      "Phonetically Balanced"
    ],
    metrics: {
      hours: "2,500+",
      sampleRate: "48kHz",
      speakers: "12,000+",
      format: "FLAC + JSON"
    },
    languages: ["Tamil", "Telugu", "Marathi", "Bengali", "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia", "Assamese", "Urdu", "Hindi"],
    tags: ["12 Languages", "Studio Quality", "Balanced"],
    createdAt: "2023-11-20"
  },
  {
    id: "indian-english-call-center",
    title: "Indian English Call Center",
    category: "NLP",
    iconName: "AudioWaveform",
    shortDescription: "Simulated and anonymized customer service calls focusing on Indian English accents, domain-specific terminology, and varied acoustic environments.",
    fullDescription: "A specialized dataset for training enterprise ASR and sentiment analysis models. It features simulated customer support interactions across domains like banking, telecom, and e-commerce. The audio reflects the unique phonetic characteristics of Indian English, including heavy regional influences, rapid speech rates, and domain-specific jargon. All PII (Personally Identifiable Information) has been strictly redacted.",
    features: [
      "100% PII Redacted & Anonymized",
      "Domain-specific Terminology (BFSI, Telecom, Retail)",
      "Customer-Agent Channel Separation (Stereo)",
      "Call Resolution & Sentiment Metadata"
    ],
    metrics: {
      hours: "5,000+",
      sampleRate: "8kHz (Telephony)",
      speakers: "20,000+",
      format: "WAV (mu-law) + JSON"
    },
    languages: ["Indian English", "Code-switched English-Hindi"],
    tags: ["5k Hours", "8kHz Telephony", "PII Redacted"],
    createdAt: "2024-02-10"
  },
  {
    id: "marathi-read-speech",
    title: "Marathi Read Speech",
    category: "TTS",
    iconName: "Mic",
    shortDescription: "High-fidelity studio recordings of native Marathi speakers reading phonetically balanced sentences for TTS model training.",
    fullDescription: "A premium TTS corpus featuring professional voice actors reading news articles, literature, and conversational prompts in Marathi. The dataset is meticulously aligned and checked for pronunciation accuracy, making it ideal for training robust text-to-speech models.",
    features: [
      "Studio Quality (Anechoic Chamber)",
      "Phonetically Balanced Sentences",
      "Prosody and Intonation Markers",
      "Professional Voice Actors"
    ],
    metrics: {
      hours: "1,200+",
      sampleRate: "48kHz",
      speakers: "50+",
      format: "WAV + TextGrids"
    },
    languages: ["Marathi"],
    tags: ["1.2k Hours", "48kHz", "Studio Quality"],
    createdAt: "2023-09-05"
  },
  {
    id: "bengali-sentiment-analysis",
    title: "Bengali Sentiment Analysis",
    category: "NLP",
    iconName: "AudioWaveform",
    shortDescription: "A large-scale dataset of Bengali audio clips annotated with fine-grained sentiment and emotion labels.",
    fullDescription: "This dataset is designed for training emotion recognition and sentiment analysis models in Bengali. It contains thousands of short audio clips extracted from public debates, podcasts, and simulated conversations, each annotated by multiple human raters for emotion (happy, sad, angry, neutral) and sentiment polarity.",
    features: [
      "Multi-rater Emotion Annotations",
      "Sentiment Polarity Scores",
      "Diverse Acoustic Environments",
      "Demographic Metadata"
    ],
    metrics: {
      hours: "800+",
      sampleRate: "16kHz",
      speakers: "5,000+",
      format: "WAV + JSON"
    },
    languages: ["Bengali"],
    tags: ["800 Hours", "Emotion Tagged", "16kHz"],
    createdAt: "2024-03-01"
  },
  {
    id: "tamil-conversational",
    title: "Tamil Conversational",
    category: "ASR",
    iconName: "Globe2",
    shortDescription: "Extensive collection of unscripted Tamil conversations, capturing regional dialects from Chennai to Madurai.",
    fullDescription: "A massive ASR corpus focusing on the Tamil language. It includes unscripted, natural conversations recorded over telephone networks and VoIP. The dataset captures various regional dialects and sociolects, providing a robust foundation for training highly accurate Tamil speech recognition systems.",
    features: [
      "Unscripted Natural Conversations",
      "Regional Dialect Coverage",
      "Telephony & VoIP Audio",
      "Detailed Transcriptions"
    ],
    metrics: {
      hours: "4,000+",
      sampleRate: "8kHz & 16kHz",
      speakers: "15,000+",
      format: "WAV + JSON"
    },
    languages: ["Tamil", "Tanglish"],
    tags: ["4k Hours", "Dialects", "Mixed Sample Rates"],
    createdAt: "2023-12-15"
  },
  {
    id: "telugu-news-broadcast",
    title: "Telugu News Broadcast",
    category: "ASR",
    iconName: "Mic",
    shortDescription: "Transcribed audio from Telugu news broadcasts, featuring formal speech and varied background noise.",
    fullDescription: "This dataset comprises thousands of hours of Telugu news broadcasts. It is ideal for training ASR models on formal, structured speech. The audio includes various background noises typical of news environments, such as music beds, field reporting noise, and multiple simultaneous speakers.",
    features: [
      "Formal Broadcast Speech",
      "Varied Background Noise",
      "Named Entity Annotations",
      "High-quality Transcriptions"
    ],
    metrics: {
      hours: "3,500+",
      sampleRate: "16kHz",
      speakers: "1,000+",
      format: "WAV + JSON"
    },
    languages: ["Telugu"],
    tags: ["3.5k Hours", "Broadcast", "16kHz"],
    createdAt: "2024-01-20"
  }
];
