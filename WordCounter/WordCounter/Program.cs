namespace WordCounterNS
{
    public class WordCounter
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            WordCounter counter = new WordCounter();
            Console.WriteLine("Input text:");
            string? text = Console.ReadLine();
            if (text == null)
            {
                Console.WriteLine("Error: No text given");
                return;
            }

            int count = counter.CountWords(text);
            Console.WriteLine($"The text has {count} words.");
        }

        public int CountWords(string text)
        {
            int wordCount = 0;
            Console.WriteLine(text.Length);
            for (int i = 1; i < text.Length; i++)
            {
                char charac = text[i];
                char charca = text[i - 1];
                if (i == 1 && !(char.IsWhiteSpace(charca) || charca is '.' or ','))
                {
                    wordCount++;
                }
                else if (!(char.IsWhiteSpace(charac) || charac is '.' or ',') && (char.IsWhiteSpace(charca) || charca is '.' or ','))
                {
                    wordCount++;
                }
            }
            return wordCount;
           
        }
    }
}