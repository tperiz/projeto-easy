using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMS.Models
{
    public class Programador
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProgramadorId { get; set; }
        public string Nome { get; set; }
        public string Skype { get; set; }
        public string Portifolio { get; set; }
        public int Telefone { get; set; }
        public string Linkedin { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Disponibilidade { get; set; }
        public int Salario { get; set; }
        public string HorarioTrab { get; set; }
        public string Email { get; set; }


    }
}
