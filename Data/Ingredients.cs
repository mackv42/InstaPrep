using System;
namespace InstaPrep.Data
{
	public class Ingredients
	{
		public string Id { get; set; } = string.Empty;
		public string Title { get; set; } = string.Empty;
		public string Measure {  get; set; } = string.Empty;

		public Ingredients()
		{
			Id = Guid.NewGuid().ToString();
		}
	}
}

