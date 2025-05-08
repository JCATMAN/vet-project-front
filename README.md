# 🏥 VetCare Management System

A comprehensive veterinary clinic management system that helps veterinary professionals manage prescriptions, medications, appointments, and patient records efficiently.

## 🚀 Features

- 📋 Patient Management
- 💊 Prescription & Medication Tracking
- 📅 Appointment Scheduling
- 👤 User Authentication & Authorization
- 📊 Medical Records Management
- 💉 Treatment History
- 📱 Responsive Design

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- PNPM
- Storybook
- React Router
- React Query

## 📋 Prerequisites

- Node.js (v18 or higher)
- PNPM (v8 or higher)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/vet-project-front.git
   cd vet-project-front
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration values.

4. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:5173`

## 📚 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm lint` - Run linter
- `pnpm format` - Format code
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 📦 Building for Production

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Storybook

We use Storybook for component development and documentation. To start Storybook:

```bash
pnpm storybook
```

Visit `http://localhost:6006` to view the component library.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by the need for better veterinary clinic management systems
