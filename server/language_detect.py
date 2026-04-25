from lingua import Language, LanguageDetectorBuilder

# Languages to detect
languages = [
    Language.ENGLISH,
    Language.FRENCH,
    Language.GERMAN,
    Language.SPANISH,
    Language.ITALIAN,
    Language.PORTUGUESE,
    Language.RUSSIAN,
    Language.CHINESE,
    Language.JAPANESE,
    Language.KOREAN,
    Language.HINDI,
    Language.ARABIC,
    Language.BENGALI,
    Language.VIETNAMESE,
    Language.TURKISH,
    Language.THAI,
    Language.INDONESIAN,
    Language.PERSIAN,
    Language.HEBREW,
    Language.GREEK
]

detector = LanguageDetectorBuilder.from_languages(*languages).build()


def detect_language(word):

    # Rule 1: If ASCII letters → assume English

    try:

        language = detector.detect_language_of(word)

        if language is None:
            return "unknown"

        return language.name.lower()

    except:
        return "unknown"