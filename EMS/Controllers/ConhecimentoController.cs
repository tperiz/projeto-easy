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
    [Route("api/Conhecimento")]
    public class ConhecimentoController : Controller
    {
        private readonly EmployeeContext _context;

        public ConhecimentoController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ContaList()
        {
            List<Conhecimentos> conta_ = new List<Conhecimentos>();
            var Conhecimento = await (from data in _context.Conhecimentos
                                      select new
                                      {
                                          ProgramadorId = data.ProgramadorId,
                                          Ionic = data.Ionic,
                                          Android = data.Android,
                                          IOS = data.IOS,
                                          HTML = data.HTML,
                                          CSS = data.CSS,
                                          Bootstrap = data.Bootstrap,
                                          Jquery = data.Jquery,
                                          Angular = data.Angular,
                                          Java = data.Java,
                                          AspNet = data.AspNet,
                                          C = data.C,
                                          Cmais = data.Cmais,
                                          Cake = data.Cake,
                                          Django = data.Django,
                                          Manjento = data.Majento,
                                          PHP = data.PHP,
                                          Wordpress = data.Wordpress,
                                          Python = data.Python,
                                          Ruby = data.Ruby,
                                          SQLServer = data.SQLServer,
                                          MySql = data.MySQL,
                                          Salesforce = data.Salesforce,
                                          Photoshop = data.Photoshop,
                                          Illustrator = data.Illustrator,
                                          SEO = data.SEO
                                      }).ToListAsync();
            Conhecimento.ForEach(x =>
            {
                Conhecimentos conhecimento = new Conhecimentos();
                conhecimento.Ionic = x.Ionic;
                conhecimento.ProgramadorId = x.ProgramadorId;
                conhecimento.Android = x.Android;
                conhecimento.IOS = x.IOS;
                conhecimento.HTML = x.HTML;
                conhecimento.CSS = x.CSS;
                conhecimento.Bootstrap = x.Bootstrap;
                conhecimento.Jquery = x.Jquery;
                conhecimento.Angular = x.Angular;
                conhecimento.Java = x.Java;
                conhecimento.AspNet = x.AspNet;
                conhecimento.C = x.C;
                conhecimento.Cmais = x.Cmais;
                conhecimento.Cake = x.Cake;
                conhecimento.Django = x.Django;
                conhecimento.Majento = x.Manjento;
                conhecimento.PHP = x.PHP;
                conhecimento.Wordpress = x.Wordpress;
                conhecimento.Python = x.Python;
                conhecimento.Ruby = x.Ruby;
                conhecimento.SQLServer = x.SQLServer;
                conhecimento.MySQL = x.MySql;
                conhecimento.Salesforce = x.Salesforce;
                conhecimento.Illustrator = x.Illustrator;
                conhecimento.SEO = x.SEO;
                conta_.Add(conhecimento);
            });


            return Json(conta_);
        }



        [HttpPost]
        public IActionResult AddConhecimento([FromBody]Conhecimentos empObj)
        {
            _context.Conhecimentos.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }

        [HttpDelete]
        public IActionResult RemoveConhecimentosDetails([FromBody]int empId)
        {
            Conhecimentos Emp;
            Emp = _context.Conhecimentos.Where(x => x.ProgramadorId == empId).First();
            _context.Conhecimentos.Remove(Emp);
            _context.SaveChanges();
            return Json("OK");
        }
    }
}