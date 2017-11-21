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
    [Route("api/Conta")]
    public class ContaController : Controller
    {
        private readonly EmployeeContext _context;

        public ContaController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ContaList()
        {
            List<Conta> conta_ = new List<Conta>();
            var Conta = await (from data in _context.Conta
                               select new
                               {
                                   ProgramadorId = data.ProgramadorId,
                                   Cpf = data.CPF,
                                   Banco = data.Banco,
                                   Agencia = data.Agencia,
                                   tipoConta = data.tipoConta,
                                   numConta = data.numConta,
                                   nomeConta = data.nomeConta

                               }).ToListAsync();
            Conta.ForEach(x =>
            {
                Conta conta = new Conta();
                conta.ProgramadorId = x.ProgramadorId;
                conta.CPF = x.Cpf;
                conta.Banco = x.Banco;
                conta.Agencia = x.Agencia;
                conta.tipoConta = x.tipoConta;
                conta.numConta = x.numConta;
                conta.nomeConta = x.nomeConta;
                conta_.Add(conta);
            });


            return Json(conta_);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> ProgramadorDetailsConta(int id)
        {

            var EmpDeatils = await (from emp in _context.Conta
                                    where emp.ProgramadorId == id
                                    select new
                                    {
                                        emp.ProgramadorId,
                                        emp.nomeConta,
                                        emp.CPF,
                                        emp.Banco,
                                        emp.Agencia,
                                        emp.numConta,
                                        emp.tipoConta,
                                    }
                          ).FirstAsync();


            return Json(EmpDeatils);
        }

        [HttpPut]
        public IActionResult EditConta([FromBody]Conta empData)
        {
            _context.Entry(empData).State = EntityState.Modified;
            _context.SaveChanges();
            return Json("ok");
        }


        [HttpPost]
        public IActionResult AddConta([FromBody]Conta empObj)
        {
            _context.Conta.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }

        [HttpDelete]
        public IActionResult RemoveContaDetails([FromBody]int empId)
        {
            Conta Emp;
            Emp = _context.Conta.Where(x => x.ProgramadorId == empId).First();
            _context.Conta.Remove(Emp);
            _context.SaveChanges();
            return Json("OK");
        }
    }
}