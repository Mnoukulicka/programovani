namespace CestaDoPrirody
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int pocetProblemu = int.Parse(Console.ReadLine());
            for (int i = 0; i < pocetProblemu; i++)
            {
                VyresProblem();
            }

        }


        static void VyresProblem()
        {
            int pocetRadku = int.Parse(Console.ReadLine());
            Dictionary<string, int> dictionary = new();

            for (int i = 0; i < pocetRadku; i++)
            {

                string x = Console.ReadLine();
                string[] stringyList = x.Split(" ");
                int xInt = int.Parse(stringyList[1]);
                string stringy = stringyList[0];


                if (dictionary.ContainsKey(stringy))
                {
                    dictionary[stringy] += xInt;
                }
                else
                {
                    dictionary.Add(stringy, xInt);
                }
            }


            VypisVysledek(dictionary);
        }

        static void VypisVysledek(Dictionary<string, int> dictionary)
        {
            Console.WriteLine(dictionary.Count);
            foreach (var key in dictionary.Keys)
            {
                Console.WriteLine($"{key} {dictionary[key]}");
            }
        }
    }

}

