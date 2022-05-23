using System;
namespace InstaPrep.Data
{
	public interface IDataService
	{
		public List<Recipe> GetRecipes();
		public Recipe? GetRecipeById(string recipeId);
	}
}

