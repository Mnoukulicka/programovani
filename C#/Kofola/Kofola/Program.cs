namespace Kofola
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int cenaVelkeho, int objemVelkeho, int cenaMaleho, int objemMaleho)
        {
            string vysledek = "BBB";
            if (objemVelkeho/(float)cenaVelkeho >= objemMaleho/(float)cenaMaleho)
            {
                vysledek = "VETSI";
            }
            else
            {
                vysledek = "MENSI";
            }
            

            return vysledek;
        }
    }
}
