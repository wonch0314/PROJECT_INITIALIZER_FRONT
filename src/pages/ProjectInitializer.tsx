import { useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard" },
  { label: "Docs" },
  { label: "Community" },
  { label: "Help" },
];

const PACKAGE_MANAGERS = ["npm", "yarn", "pnpm"];
const BUNDLERS = ["webpack", "vite"];
const LANGUAGES = ["JavaScript", "TypeScript"];
const STRUCTURES = ["Basic", "DDD"];

export default function ProjectInitializer() {
  const [projectName, setProjectName] = useState("my-app");
  const [packageManager, setPackageManager] = useState("npm");
  const [bundler, setBundler] = useState("webpack");
  const [language, setLanguage] = useState("JavaScript");
  const [nodeVersion, setNodeVersion] = useState("");
  const [reactVersion, setReactVersion] = useState("");
  const [structure, setStructure] = useState("Basic");

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* 네비게이션 바 */}
      <nav
        style={{
          borderBottom: "1px solid #e5e8eb",
          height: 65,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* 로고 */}
          <div
            style={{
              width: 16,
              height: 16,
              background: "#0d80f2",
              borderRadius: 4,
              marginRight: 12,
            }}
          />
          <span style={{ fontWeight: 700, fontSize: 18, color: "#121417" }}>
            CodeBoost
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_ITEMS.map((item) => (
            <span
              key={item.label}
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#121417",
                cursor: "pointer",
              }}
            >
              {item.label}
            </span>
          ))}
          {/* 프로필 이미지 자리 */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              background: "#dbe0e5",
              marginLeft: 24,
            }}
          />
        </div>
      </nav>

      {/* 메인 컨테이너 */}
      <div
        style={{
          maxWidth: 960,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          padding: 40,
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 32,
            color: "#121417",
          }}
        >
          Create a new project
        </h1>

        {/* Project name */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginBottom: 8,
              color: "#121417",
            }}
          >
            Project name
          </div>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={{
              width: 448,
              height: 56,
              border: "1px solid #dbe0e5",
              borderRadius: 8,
              padding: "0 16px",
              fontSize: 16,
              color: "#121417",
              background: "#fff",
            }}
          />
        </div>

        {/* Package manager */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            Package manager
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {PACKAGE_MANAGERS.map((pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                style={{
                  minWidth: 60,
                  height: 44,
                  border: "1px solid #dbe0e5",
                  borderRadius: 8,
                  background: packageManager === pm ? "#0d80f2" : "#fff",
                  color: packageManager === pm ? "#fff" : "#121417",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {pm}
              </button>
            ))}
          </div>
        </div>

        {/* Bundler */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            Bundler
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {BUNDLERS.map((b) => (
              <button
                key={b}
                onClick={() => setBundler(b)}
                style={{
                  minWidth: 60,
                  height: 44,
                  border: "1px solid #dbe0e5",
                  borderRadius: 8,
                  background: bundler === b ? "#0d80f2" : "#fff",
                  color: bundler === b ? "#fff" : "#121417",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            Language
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  minWidth: 100,
                  height: 44,
                  border: "1px solid #dbe0e5",
                  borderRadius: 8,
                  background: language === lang ? "#0d80f2" : "#fff",
                  color: language === lang ? "#fff" : "#121417",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Node.js version */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            Node.js version
          </div>
          <input
            value={nodeVersion}
            onChange={(e) => setNodeVersion(e.target.value)}
            placeholder="예: 18.x"
            style={{
              width: 448,
              height: 32,
              border: "1px solid #dbe0e5",
              borderRadius: 8,
              padding: "0 12px",
              fontSize: 16,
              color: "#121417",
              background: "#fff",
            }}
          />
        </div>

        {/* React version */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            React version
          </div>
          <input
            value={reactVersion}
            onChange={(e) => setReactVersion(e.target.value)}
            placeholder="예: 18.2.0"
            style={{
              width: 448,
              height: 32,
              border: "1px solid #dbe0e5",
              borderRadius: 8,
              padding: "0 12px",
              fontSize: 16,
              color: "#121417",
              background: "#fff",
            }}
          />
        </div>

        {/* Project structure */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              color: "#121417",
            }}
          >
            Project structure
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {STRUCTURES.map((s) => (
              <button
                key={s}
                onClick={() => setStructure(s)}
                style={{
                  minWidth: 70,
                  height: 44,
                  border: "1px solid #dbe0e5",
                  borderRadius: 8,
                  background: structure === s ? "#0d80f2" : "#fff",
                  color: structure === s ? "#fff" : "#121417",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Create project 버튼 */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              width: 131,
              height: 40,
              background: "#0d80f2",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Create project
          </button>
        </div>
      </div>
    </div>
  );
}
