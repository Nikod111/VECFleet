CREATE DATABASE [VECFleetDB]
GO

USE [VECFleetDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE Vehiculo (
    [id] [int] IDENTITY(1,1) NOT NULL,
    [TipoVehiculo] [varchar](10) NOT NULL,
    [CantidadRuedas] [int] NOT NULL,
	[Marca] [varchar](10) NOT NULL,
	
	[Modelo] [varchar](20) NOT NULL,
	[Patente] [varchar](20) NOT NULL,
	[NumeroChasis] [varchar](20) NOT NULL,
	[KMsRecorridos] [int] NOT NULL,
	[KMsParaMantenimiento] [int] NOT NULL,
);