using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMS.Models
{
    public class Conta
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProgramadorId { get; set; }
        public string nomeConta { get; set; }
        public int CPF { get; set; }
        public string Banco { get; set; }
        public int Agencia { get; set; }
        public int numConta { get; set; }
        public string tipoConta { get; set; }



    }
}