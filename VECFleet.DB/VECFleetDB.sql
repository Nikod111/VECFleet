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

SET IDENTITY_INSERT [dbo].[Vehiculo] ON
INSERT INTO [dbo].[Vehiculo] ([id], [TipoVehiculo], [CantidadRuedas], [Marca], [Modelo], [Patente], [NumeroChasis], [KMsRecorridos], [KMsParaMantenimiento]) VALUES (1, N'Automóvil', 4, N'SUZUKI', N'Santana', N'NVZ087', N'8A6MAVR76MA101547', 30000, 10000)
INSERT INTO [dbo].[Vehiculo] ([id], [TipoVehiculo], [CantidadRuedas], [Marca], [Modelo], [Patente], [NumeroChasis], [KMsRecorridos], [KMsParaMantenimiento]) VALUES (2, N'Automóvil', 4, N'HONDA', N'City', N'AB123CD', N'8AWPB45Z27A338861', 90000, 30000)
INSERT INTO [dbo].[Vehiculo] ([id], [TipoVehiculo], [CantidadRuedas], [Marca], [Modelo], [Patente], [NumeroChasis], [KMsRecorridos], [KMsParaMantenimiento]) VALUES (3, N'Automóvil', 4, N'HONDA', N'Civic', N'RIO2A18', N'8AWPB45Z27A338861', 20000, 40000)
INSERT INTO [dbo].[Vehiculo] ([id], [TipoVehiculo], [CantidadRuedas], [Marca], [Modelo], [Patente], [NumeroChasis], [KMsRecorridos], [KMsParaMantenimiento]) VALUES (4, N'Automóvil', 4, N'FOCUS', N'Ford', N'AB123DC', N'8CHJA5010NP029646', 10000, 30000)
INSERT INTO [dbo].[Vehiculo] ([id], [TipoVehiculo], [CantidadRuedas], [Marca], [Modelo], [Patente], [NumeroChasis], [KMsRecorridos], [KMsParaMantenimiento]) VALUES (5, N'Moto', 2, N'YAMAHA', N'Tricity 125', N'960GAO', N'8AWPB45Z0KA504819', 30000, 10000)
SET IDENTITY_INSERT [dbo].[Vehiculo] OFF
