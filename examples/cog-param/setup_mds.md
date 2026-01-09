# Set pnpm to store everything in your home directory
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Install pnpm via standalone script (no root needed)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Configure pnpm to use user-space for everything
pnpm config set store-dir ~/.pnpm-store


# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Install and use Node 20
nvm install 20
nvm use 20

# Verify
node --version  # should be v20.x.x

# Then retry
cd /perm_storage/home/mdsumner/Git/deck.gl-raster/examples/cog-basic
pnpm dev