import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUserRecipes();
  }, [token, navigate]);

  const fetchUserRecipes = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/recipes/user/recipes",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching user recipes:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    setDeletingId(id);

    try {
      const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
      } else {
        console.error("Failed to delete recipe");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-center">No recipes found. Start adding some!</p>
      ) : (
        <ul className="list-group">
          {recipes.map((recipe) => (
            <li
              key={recipe._id}
              className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={recipe.image || "https://via.placeholder.com/150"}
                  alt={recipe.name}
                  className="rounded-circle me-3"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h5 className="mb-1">{recipe.name}</h5>
                  <small className="text-muted">{recipe.category}</small>
                </div>
              </div>

              {deletingId === recipe._id ? (
                <button className="btn btn-danger btn-sm disabled" disabled>
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Deleting...</span>
                  </div>{" "}
                  Deleting
                </button>
              ) : (
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
