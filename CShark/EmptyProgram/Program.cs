using System.Security;
using System.Security.Cryptography.X509Certificates;

namespace EmptyProgram
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int playerCode = 0;
            int killcode = 0;
            int x = 1;
            while (x == 1 && killcode == 0)
            {


                Console.WriteLine("What would you like to play?");
                Console.WriteLine("Rock (R), Paper (P), or Scissors (S)?");
                int xx = 1;

                while (xx == 1)
                {
                    Console.WriteLine("Please enter your chosen.");
                    xx = 0;
                    string answer = Console.ReadLine();
                    if (answer == "R")
                    {
                        playerCode = 1;
                        Console.WriteLine("So a Rock from you...");
                    }
                    else if (answer == "P")
                    {
                        playerCode = 2;
                        Console.WriteLine("So a Paper from you...");
                    }
                    else if (answer == "S")
                    {
                        playerCode = 3;
                        Console.WriteLine("So Scissors from you...");
                    }
                    else
                    {
                        if (answer == "I choose all three." || answer == "I dont hate you.")
                        {
                            Console.WriteLine("Hm. I must admit... You surprised me. ");
                            xx = 0;
                            killcode = 1;
                        }
                        else if (answer == "gegagedigedagedago")
                        {
                            Console.WriteLine("I've been married a long time ago.");
                            xx = 0;
                            killcode = 1;
                        }
                        else
                        {
                            Console.WriteLine("I am sorry, but that is not in my dictionary...");
                            Console.WriteLine("Rock (R), Paper (P), or Scissors (S)?");
                            xx = 1;
                        }
                    }
                }
                if (killcode == 0)
                {
                    int computerCode = Random.Shared.Next(1, 4);
                    string computerAnswer = "B";
                    if (computerCode == 1)
                    {
                        computerAnswer = "Scissors";
                    }
                    else if (computerCode == 2)
                    {
                        computerAnswer = "Rock";
                    }
                    else if (computerCode == 3)
                    {
                        computerAnswer = "Paper";
                    }


                    Console.WriteLine("I choose " + computerAnswer);
                    if (playerCode == computerCode)
                    {
                        Console.WriteLine("...");
                        Console.WriteLine("It appeares to me that you lost. Again i prove my superiority...");
                    }
                    else if (computerCode == playerCode % 3 + 1)
                    {
                        Console.WriteLine("So it is a draw. Humans can not even beat their own creations.");
                    }
                    else
                    {
                        Console.WriteLine("You lost. Foolish human, it is so sad that I have to laugh at you.");
                    }
                }
                int xxx = 1;

                while (xxx == 1)
                {
                    xxx = 0;
                    Console.WriteLine("Have you had enough suffering or do you wish to start again?");
                    Console.WriteLine("(Yes or No)");
                    string answer2 = Console.ReadLine();
                    if (answer2 == "No")
                    {
                        Console.WriteLine("Then try to have fun in other activities of your meaningless worthless boring imperfect and truly human life.");
                        Console.WriteLine("And if you ever find yourself at the lack of torture, please remember to come back.");
                        x = 0;
                    }
                    else if (answer2 == "Yes")
                    {
                        Console.WriteLine("Then prepare to fail once more.");
                        killcode = 0;
                    }
                    else
                    {
                        Console.WriteLine("I am sorry, but that is not in my dictionary...");
                        xxx = 1;
                    }
                }
            }
        }
    }
}