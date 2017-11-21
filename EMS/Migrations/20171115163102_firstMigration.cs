using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EMS.Migrations
{
    public partial class firstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Conhecimento",
                columns: table => new
                {
                    ProgramadorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Android = table.Column<int>(type: "int", nullable: false),
                    Angular = table.Column<int>(type: "int", nullable: false),
                    AspNet = table.Column<int>(type: "int", nullable: false),
                    Bootstrap = table.Column<int>(type: "int", nullable: false),
                    C = table.Column<int>(type: "int", nullable: false),
                    CSS = table.Column<int>(type: "int", nullable: false),
                    Cake = table.Column<int>(type: "int", nullable: false),
                    Cmais = table.Column<int>(type: "int", nullable: false),
                    Django = table.Column<int>(type: "int", nullable: false),
                    HTML = table.Column<int>(type: "int", nullable: false),
                    IOS = table.Column<int>(type: "int", nullable: false),
                    Illustrator = table.Column<int>(type: "int", nullable: false),
                    Ionic = table.Column<int>(type: "int", nullable: false),
                    Java = table.Column<int>(type: "int", nullable: false),
                    Jquery = table.Column<int>(type: "int", nullable: false),
                    Manjento = table.Column<int>(type: "int", nullable: false),
                    MySql = table.Column<int>(type: "int", nullable: false),
                    PHP = table.Column<int>(type: "int", nullable: false),
                    Photoshop = table.Column<int>(type: "int", nullable: false),
                    Python = table.Column<int>(type: "int", nullable: false),
                    Ruby = table.Column<int>(type: "int", nullable: false),
                    SEO = table.Column<int>(type: "int", nullable: false),
                    SQLServer = table.Column<int>(type: "int", nullable: false),
                    Salesforce = table.Column<int>(type: "int", nullable: false),
                    Wordpress = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conhecimento", x => x.ProgramadorId);
                });

            migrationBuilder.CreateTable(
                name: "Conta",
                columns: table => new
                {
                    ProgramadorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Agencia = table.Column<int>(type: "int", nullable: false),
                    Banco = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cpf = table.Column<int>(type: "int", nullable: false),
                    nomeConta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    numConta = table.Column<int>(type: "int", nullable: false),
                    tipoConta = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conta", x => x.ProgramadorId);
                });

            migrationBuilder.CreateTable(
                name: "Programador",
                columns: table => new
                {
                    ProgramadorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Disponibilidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HorarioTrab = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Linkedin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Portifolio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Salario = table.Column<int>(type: "int", nullable: false),
                    Skype = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Telefone = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programador", x => x.ProgramadorId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Conhecimento");

            migrationBuilder.DropTable(
                name: "Conta");

            migrationBuilder.DropTable(
                name: "Programador");
        }
    }
}
