using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMS.Models;
using Microsoft.EntityFrameworkCore;

namespace EMS.Controllers
{
    [Produces("application/json")]
    [Route("api/Programador")]
    public class ProgramadorController : Controller
    {
        private readonly EmployeeContext _context;

        public ProgramadorController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ProgramadorList()
        {
            List<Programador> programador_ = new List<Programador>();
            var Programador = await (from data in _context.Programador
                                 select new
                                 {
                                     ProgramadorId = data.ProgramadorId,
                                     Email = data.Email,
                                     Nome = data.Nome,
                                     Skype = data.Skype,
                                     Telefone = data.Telefone,
                                     Linkedin = data.Linkedin,
                                     Cidade = data.Cidade,
                                     Estado = data.Estado,
                                     Portifolio = data.Portifolio,
                                     Disponibilidade = data.Disponibilidade,
                                     HorarioTrab = data.HorarioTrab,
                                     Salario = data.Salario,                                   

                                 }).ToListAsync();
            Programador.ForEach(x =>
            {
                Programador pro = new Programador();
                pro.ProgramadorId = x.ProgramadorId;
                pro.Email = x.Email;
                pro.Nome = x.Nome;
                pro.Skype = x.Skype;
                pro.Telefone = x.Telefone;
                pro.Linkedin = x.Linkedin;
                pro.Cidade = x.Cidade;
                pro.Estado = x.Estado;
                pro.Portifolio = x.Portifolio;
                pro.Disponibilidade = x.Disponibilidade;
                pro.HorarioTrab = x.HorarioTrab;
                pro.Salario = x.Salario;
                programador_.Add(pro);
            });


            return Json(programador_);
        }


        [HttpGet("{email}")]
        public async Task<IActionResult> ProgramadorDetails(string email)
        {

            var EmpDeatils = await (from emp in _context.Programador                                   
                                    where emp.Email == email
                                    select new
                                    {
                                        emp.ProgramadorId,
                                        emp.Nome,
                                        emp.Skype,
                                        emp.Telefone,
                                        emp.Linkedin,
                                        emp.Cidade,
                                        emp.Estado,
                                        emp.Portifolio,
                                        emp.Disponibilidade,
                                        emp.Email,
                                        emp.Salario,
                                        emp.HorarioTrab

                                    }
                          ).FirstAsync();


            return Json(EmpDeatils);
        }

        [HttpPost]
        public IActionResult AddProgramador([FromBody]Programador empObj)
        {
            _context.Programador.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }

        [HttpPut]
        public IActionResult EditProgramador([FromBody]Programador empData)
        {
            _context.Entry(empData).State = EntityState.Modified;
            _context.SaveChanges();
            return Json("ok");
        }


        [HttpDelete]
        public IActionResult RemoveProgramadorDetails([FromBody]int empId)
        {
            Programador Emp;
            Emp = _context.Programador.Where(x => x.ProgramadorId == empId).First();
            _context.Programador.Remove(Emp);
            _context.SaveChanges();
            return Json("OK");
        }
    }
}