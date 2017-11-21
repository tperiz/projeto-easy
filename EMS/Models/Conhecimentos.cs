using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMS.Models
{
    public class Conhecimentos
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProgramadorId { get; set; }
        public int Ionic { get; set; }
        public int Android { get; set; }
        public int IOS { get; set; }
        public int HTML { get; set; }
        public int CSS { get; set; }
        public int Bootstrap { get; set; }
        public int Jquery { get; set; }
        public int Angular { get; set; }
        public int Java { get; set; }
        public int AspNet { get; set; }
        public int C { get; set; }
        public int Cmais { get; set; }
        public int Cake { get; set; }
        public int Django { get; set; }
        public int Majento { get; set; }
        public int PHP { get; set; }
        public int Wordpress { get; set; }
        public int Python { get; set; }
        public int Ruby { get; set; }
        public int SQLServer { get; set; }
        public int MySQL { get; set; }
        public int Salesforce { get; set; }
        public int Photoshop { get; set; }
        public int Illustrator { get; set; }
        public int SEO { get; set; }
        public string Outra { get; set; }
        public string Crud { get; set; }


    }
}
