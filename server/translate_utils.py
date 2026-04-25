from deep_translator import GoogleTranslator

def translate_to_english(word):

    try:
        translated = GoogleTranslator(
            source='auto',
            target='en'
        ).translate(word)

        return translated

    except Exception as e:
        print("Translation error:", e)
        return None